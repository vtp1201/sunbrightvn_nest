import { Injectable } from '@nestjs/common';

import {
  CountryService,
  NotificationTemplateService,
  OrderItem,
  OrderService,
  PaymentWithCardViaStripeInput,
  RoleService,
  StripeService,
  TaskService,
  UpdateAfterPaymentInput,
  WebsiteFullRelation,
} from '@types';

import { exchange, NOTIFICATION_TEMPLATE, PAYMENT_GATEWAY } from '@utilities';

@Injectable()
export class PaymentService {
  constructor(
    private website: WebsiteFullRelation,
    private stripeService: StripeService,
    private countryService: CountryService,
    private orderService: OrderService,
    private notificationTemplateService: NotificationTemplateService,
    private taskService: TaskService,
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

  async handleAfterPaymentSuccess(updateOrder: UpdateAfterPaymentInput) {
    const orderPaySuccess = await this.orderService.updateAfterPayment(updateOrder);
    return orderPaySuccess;
  }

  async handleAfterPaymentFail({ user, order }: PaymentWithCardViaStripeInput) {
    // === notify Customer
    const messageParams = [order.id, user.username];
    const task = await this.taskService.getTaskWithSupporters({ orderId: order.id });
    let supporterUsers = [];
    const notificationTemplate = await this.notificationTemplateService.findFirst({
      include: {
        roles: true,
      },
      where: {
        id: NOTIFICATION_TEMPLATE.PORTAL_PAID_FAIL,
      },
    });
    if (notificationTemplate) {
      if (notificationTemplate.isNotifyToSupporter) supporterUsers.push(task?.csMember);
      if (notificationTemplate.isNotifyToLeader) supporterUsers.push(task?.csLeader);

      const objFormatRole = RoleService.formatSendNotifyToRole(notificationTemplate.roles, task);
      if (objFormatRole.notifyToUsers.length > 0)
        supporterUsers = [...supporterUsers, ...objFormatRole.notifyToUsers];
      if (objFormatRole.notifyToRoles.length >= 0)
        notificationTemplate.roles = objFormatRole.notifyToRoles;
      // const notificationImplement = new NotificationImplement(
      //   notificationTemplate,
      //   messageParams,
      //   supporterUsers,
      //   null,
      //   {},
      // );
      // await notificationImplement.findUserByRoles();
      // notificationImplement.send();
    }
    // OrderMailService.send_fail(Order.id);

    return {
      isSuccess: false,
      orderId: order.id,
    };
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
