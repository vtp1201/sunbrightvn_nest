import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.ORDER;
@Controller()
@ApiTags(TAG)
export class OrderController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }

  @Get(ROUTE.DASHBOARD)
  listDashBoard() {
    return '';
  }

  @Get(ROUTE.BY_ID)
  get() {
    return '';
  }

  @Get(ROUTE.BY_ID__BANKING_TREE)
  getBankingTree() {
    return '';
  }

  @Get(ROUTE.BY_ID__ADDITION_TREE)
  getAdditionTree() {
    return '';
  }

  @Post(ROUTE.MAIL_TO_MY_EMAIL_MEETING_SCHEDULE)
  sendToMyEmail() {
    return '';
  }

  @Put(ROUTE.TRIGGER_EMAIL)
  updateTriggerEmail() {
    return '';
  }

  @Post(ROUTE.REFUND__BY_ID)
  refund() {
    return '';
  }

  @Get(ROUTE.BY_ID__YEARS_NOT_BUY_EVENT)
  getYearListNotBuyEvent() {
    return '';
  }

  @Post(ROUTE.BY_ID__COMPANY_EVENT)
  createCompanyEvents() {
    return '';
  }

  @Post(ROUTE.SERVICE_AR)
  createOrderServiceFee() {
    return '';
  }
}
