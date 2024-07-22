import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.ONBOARDING.CUSTOMER;
@Controller()
@ApiTags(TAG)
export class CustomerController {
  constructor() {}

  @Post(ROUTE.BASE)
  createCustomer() {
    return '';
  }
}
