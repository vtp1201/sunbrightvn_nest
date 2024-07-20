import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.CUSTOMER;
@Controller()
@ApiTags(TAG)
export class CustomerController {
  constructor() {}

  @Get(ROUTE.QUESTIONS)
  getQuestion() {
    return '';
  }

  @Post(ROUTE.ANSWERS)
  createOrUpdateAnswer() {
    return '';
  }

  @Get(ROUTE.ANSWERS)
  getAnswer() {
    return '';
  }
}
