import { Injectable } from '@nestjs/common';

import { StripeService } from '@modules/stripe/stripe.service';

import { OrderItem, WebsiteFullRelation } from '@types';

import { exchange } from '@utilities';

@Injectable()
export class PaymentService {
  constructor(
    private website: WebsiteFullRelation,
    private stripeService: StripeService,
  ) {}

  async paymentWithStripe(param: {}) {
    const newCustomerStripe = await this.stripeService.createCustomer({});
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
