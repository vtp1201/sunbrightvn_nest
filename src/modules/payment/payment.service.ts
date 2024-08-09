import { Injectable } from '@nestjs/common';

import {
  CountryService,
  NotificationService,
  OrderItem,
  OrderService,
  PaymentWithCardViaStripeInput,
  StripeService,
  UpdateAfterPaymentInput,
  WebsiteFullRelation,
} from '@types';

import { exchange, PAYMENT_GATEWAY } from '@utilities';

@Injectable()
export class PaymentService {
  constructor(
    private website: WebsiteFullRelation,
    private stripeService: StripeService,
    private countryService: CountryService,
    private orderService: OrderService,
    private notificationService: NotificationService,
  ) {}

  async paymentWithCardViaStripe({ cardholderName, user, order }: PaymentWithCardViaStripeInput) {
    const updateOrder: UpdateAfterPaymentInput = {
      id: order.id,
      paidAmount: order.amount,
      paymentGatewayId: PAYMENT_GATEWAY.CARD_VIA_STRIPE,
      amountExchangeRate: this.website.currency.exchangeRate,
      amountConverted: 0,
      amountCode: 'USD',
    };
    try {
      const newCustomerStripe = await this.stripeService.createCustomer({
        email: user.customer.email,
        name: cardholderName,
      });
      const chargeStripe = await this.stripeService.chargePayment({
        customerId: newCustomerStripe.id,
        description: `Order INC${order.id}`,
        amount: this.calculatePrice(order.orderItems),
      });

      const country = await this.countryService.getCountryByCode(
        chargeStripe.payment_method_details.card.country,
      );

      updateOrder.amountConverted = chargeStripe.amount / 100; //stripe currency unit is cent (0.01$)
      updateOrder.amountCode = chargeStripe.currency;
      updateOrder.countryCardId = country.id;
    } catch (_error) {
      // logger.error(error, { label: __filename });
    }
  }

  async handleAfterPaymentSuccess() {
    const orderPaySuccess = await this.orderService.updateAfterPayment({
      id: order.id,
      paidAmount: order.amount,
      paymentGatewayId: PAYMENT_GATEWAY.CARD_VIA_STRIPE,
      amountConverted: chargeStripe.amount / 100, //stripe currency unit is cent (0.01$)
      amountCode: chargeStripe.currency,
      amountExchangeRate: this.website.currency.exchangeRate,
      countryCardId: country.id,
    });
  }

  async handleAfterPaymentFail({ user, order }: PaymentWithCardViaStripeInput) {
    // === notify Customer
    const messageParams = [order.id, user.username];
    const task = await taskRepository.getTaskWithSupporters({ order_id: Order.id, is_deleted: 0 });
    let supporterUsers = [];
    const notificationTemplate = await Models.NotificationTemplate.findOne({
      include: {
        model: Models.NotificationTemplateHasRole,
      },
      where: {
        id: PORTAL_PAID_FAIL,
        is_deleted: 0,
      },
    });
    if (notificationTemplate) {
      if (notificationTemplate.is_notify_to_supporter) supporterUsers.push(task?.CSMember);
      if (notificationTemplate.is_notify_to_leader) supporterUsers.push(task?.CSLeader);

      const objFormatRole = NotificationService.formatSendNotifyToRole(
        notificationTemplate.NotificationTemplateHasRoles,
        task,
      );
      if (objFormatRole.notifyToUsers.length > 0)
        supporterUsers = [...supporterUsers, ...objFormatRole.notifyToUsers];
      if (objFormatRole.notifyToRoles.length >= 0)
        notificationTemplate.NotificationTemplateHasRoles = objFormatRole.notifyToRoles;
      const notificationImplement = new NotificationImplement(
        notificationTemplate,
        messageParams,
        supporterUsers,
        null,
        {},
      );
      await notificationImplement.findUserByRoles();
      notificationImplement.send();
    }
    OrderMailService.send_fail(Order.id);

    return MessageUtility.send(res, 400101, {
      is_success: false,
      order_id: Order.id,
    });
  }

  calculatePrice(orderItems: OrderItem[]) {
    let sum = 0;
    orderItems.forEach((item) => {
      sum +=
        exchange(
          item.unitPrice,
          this.website.currency.exchangeRate,
          this.website.minUnit,
          this.website.minAmount,
        ) * item.quantity;
    });
    return sum;
  }
}
