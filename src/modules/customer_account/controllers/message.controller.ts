import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.MESSAGE;
@Controller()
@ApiTags(TAG)
export class MessageController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }

  @Post(ROUTE.BASE)
  create() {
    return '';
  }

  @Post(ROUTE.FIRST)
  get() {
    return '';
  }
}
