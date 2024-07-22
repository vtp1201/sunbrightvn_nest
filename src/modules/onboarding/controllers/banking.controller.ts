import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.ONBOARDING.BANKING;
@Controller()
@ApiTags(TAG)
export class BankingController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }

  @Post(ROUTE.BASE)
  supervisorCustomerBank() {
    return '';
  }
}
