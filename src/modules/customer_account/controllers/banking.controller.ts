import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.BANKING;
@Controller()
@ApiTags(TAG)
export class BankingController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }

  @Get(ROUTE.PROCESS)
  banksWithProcess() {
    return '';
  }

  @Post(ROUTE.BASE)
  create() {
    return '';
  }

  @Post(ROUTE.UPGRADE_SERVICE__STRIPE)
  upgradeService() {
    return '';
  }
}
