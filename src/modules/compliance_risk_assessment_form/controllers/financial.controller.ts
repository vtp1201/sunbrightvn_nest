import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { QueryDto } from '../dtos/query.dto';
import { FinancialFormService } from '../services';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.FINANCIAL;
@Controller()
@ApiTags(TAG)
export class FinancialController {
  constructor(private financialFormService: FinancialFormService) {}

  @Get(ROUTE.QUESTIONS)
  // @ApiResponse()
  async getQuestion(@Query() query: QueryDto) {
    const data = await this.financialFormService.getQuestion({
      processId: query.processId,
    });
    return data;
  }

  @Post(ROUTE.ANSWERS)
  createOrUpdateAnswer() {
    return '';
  }

  @Get(ROUTE.ANSWERS)
  async getAnswer(@Query() query: QueryDto) {
    return await this.financialFormService.getAnswers({
      processId: query.processId,
    });
  }
}
