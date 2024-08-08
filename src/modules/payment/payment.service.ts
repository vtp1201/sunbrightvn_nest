import { Injectable } from '@nestjs/common';

import { CountryService } from '@modules/country/country.service';
import { OrderService } from '@modules/order/order.service';
import { StripeService } from '@modules/stripe/stripe.service';

import { Customer, Order, OrderItem, User, WebsiteFullRelation } from '@types';

import { exchange, PAYMENT_GATEWAY } from '@utilities';

@Injectable()
export class PaymentService {
  constructor(
    private website: WebsiteFullRelation,
    private stripeService: StripeService,
    private countryService: CountryService,
    private orderService: OrderService,
  ) {}

  async paymentWithCardViaStripe({
    cardholderName,
    user,
    order,
  }: {
    cardholderName: string;
    user: User & { customer: Customer };
    order: Order & { orderItems: OrderItem[] };
  }) {
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

      const orderPaySuccess = await this.orderService.updateAfterPayment({
        id: order.id,
        paidAmount: order.amount,
        paymentGatewayId: PAYMENT_GATEWAY.CARD_VIA_STRIPE,
        amountConverted: chargeStripe.amount / 100, //stripe currency unit is cent (0.01$)
        amountCode: chargeStripe.currency,
        // amountExchangeRate: chargeStripe.exchange_rate
        countryCardId: country.id,
      });
    } catch (_error) {}
  }

  async handleOrderAfterPaymentSuccess() {}

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
