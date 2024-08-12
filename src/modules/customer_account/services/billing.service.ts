import { Injectable } from '@nestjs/common';

import '@prisma/client/runtime/library';

import { BillingService, QueryOption } from '@types';

@Injectable()
export class BillingCustomerAccountService {
  constructor(private billingService: BillingService) {}

  list(params: any, queryOption: QueryOption<['a', 'b']>) {}
}
