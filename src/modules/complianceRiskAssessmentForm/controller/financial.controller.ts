import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.FINANCIAL;
@Controller()
@ApiTags(TAG)
export class FinancialController {
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
