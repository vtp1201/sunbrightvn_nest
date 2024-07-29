import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

import { QueryDTO } from '../dtos/query.dto';
import { FinancialFormService } from '../services';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.FINANCIAL;
@Controller()
@ApiTags(TAG)
export class FinancialController {
  constructor(private financialFormService: FinancialFormService) {}

  @Get(ROUTE.QUESTIONS)
  // @ApiResponse()
  async getQuestion(@Query() query: QueryDTO) {
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
  async getAnswer(@Query() query: QueryDTO) {
    return await this.financialFormService.getAnswers({
      processId: query.processId,
    });
  }
}
