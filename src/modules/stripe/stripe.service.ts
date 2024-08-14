import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import Stripe from 'stripe';

// import { WebsiteFullRelation } from '@types';
import { CONFIGURATION } from '@utilities';

@Injectable()
export class StripeService extends Stripe {
  constructor(
    configService: ConfigService,
    // private website: WebsiteFullRelation,
  ) {
    super(configService.get(CONFIGURATION.NODE_ENV));
  }

  createCustomer(param: { email: string; name?: string }) {
    return this.customers.create({
      email: param.email,
      name: param.name ?? '',
    });
  }

  chargePayment(param: { customerId: string; amount: number; description?: string }) {
    return this.charges.create({
      amount: param.amount,
      description: param.description,
      currency: 'this.website.currency.code',
      customer: param.customerId,
    });
  }
}
