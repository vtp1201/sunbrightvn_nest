import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.PROCESS;
@Controller()
@ApiTags(TAG)
export class ProcessController {
  constructor() {}

  @Get(ROUTE.BY_ID)
  getFromPortal() {
    return '';
  }

  @Post(ROUTE.APPROVE)
  approveWithCustomer() {
    return '';
  }

  @Post(ROUTE.REJECT)
  rejectWithCustomer() {
    return '';
  }
}
