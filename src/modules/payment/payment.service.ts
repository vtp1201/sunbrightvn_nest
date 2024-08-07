import { Injectable } from '@nestjs/common';

import { CountryService } from '@modules/country/country.service';
import { StripeService } from '@modules/stripe/stripe.service';

import { Customer, Order, OrderItem, User, WebsiteFullRelation } from '@types';

import { exchange } from '@utilities';

@Injectable()
export class PaymentService {
  constructor(
    private website: WebsiteFullRelation,
    private stripeService: StripeService,
    private countryService: CountryService,
  ) {}

  async paymentWithStripe({
    cardholderName,
    user,
    order,
  }: {
    cardholderName: string;
    user: User & { customer: Customer };
    order: Order & { orderItems: OrderItem[] };
  }) {
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
      chargeStripe?.payment_method_details?.card?.country,
    );
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
