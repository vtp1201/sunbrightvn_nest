import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { QueryDto } from '../dtos/query.dto';
import { ServiceFormService } from '../services';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.SERVICE;
@Controller()
@ApiTags(TAG)
export class ServiceController {
  constructor(private serviceFormService: ServiceFormService) {}

  @Get(ROUTE.QUESTIONS)
  async getQuestion(@Query() query: QueryDto) {
    return await this.getQuestion({
      processId: query.processId,
    });
  }

  @Post(ROUTE.ANSWERS)
  createOrUpdateAnswer() {
    return '';
  }

  @Get(ROUTE.ANSWERS)
  async getAnswer(@Query() query: QueryDto) {
    return await this.getAnswer({
      processId: query.processId,
    });
  }
}
