import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.TOOLS.US_BUSINESS_ENTITY;
@Controller()
@ApiTags(TAG)
export class USBusinessEntityController {
  constructor() {}

  @Get(ROUTE.BASE)
  questionList() {
    return '';
  }

  @Get(ROUTE.SCORE)
  getScore() {
    return '';
  }
}
