import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.BILLING;
@Controller()
@ApiTags(TAG)
export class BillingController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }

  @Get(ROUTE.BY_ID)
  get() {
    return '';
  }

  @Put(ROUTE.BY_ID)
  update() {
    return '';
  }

  @Post(ROUTE.BASE)
  create() {
    return '';
  }

  @Delete(ROUTE.BY_ID)
  delete() {
    return '';
  }

  @Delete(ROUTE.DELETE_MULTI)
  deleteMulti() {
    return '';
  }
}
