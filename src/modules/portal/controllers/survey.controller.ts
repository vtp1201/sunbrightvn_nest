import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.SURVEY;
@Controller()
@ApiTags(TAG)
export class SurveyController {
  constructor() {}

  @Get(ROUTE.BASE)
  getSurvey() {
    return '';
  }

  @Post(ROUTE.BASE)
  postSurvey() {
    return '';
  }
}
