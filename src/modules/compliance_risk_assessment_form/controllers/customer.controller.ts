import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { QueryDto } from '../dtos/query.dto';
import { CustomerFormService } from '../services';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.CUSTOMER;
@Controller()
@ApiTags(TAG)
export class CustomerController {
  constructor(private customerFormService: CustomerFormService) {}

  @Get(ROUTE.QUESTIONS)
  async getQuestion(@Query() query: QueryDto) {
    return await this.customerFormService.getQuestion({
      processId: query.processId,
      typeMemberId: query.typeMemberId,
      companyMemberTypeId: query.companyMemberTypeId,
    });
  }

  @Post(ROUTE.ANSWERS)
  createOrUpdateAnswer() {
    return '';
  }

  @Get(ROUTE.ANSWERS)
  async getAnswer(@Query() query: QueryDto) {
    return await this.customerFormService.getAnswers({
      processId: query.processId,
      companyMemberId: query.companyMemberId,
      companyMemberTypeId: query.companyMemberTypeId,
    });
  }
}
