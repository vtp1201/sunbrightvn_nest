import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.ONBOARDING.CHECK_NAME;
@Controller()
@ApiTags(TAG)
export class CheckNameController {
  constructor() {}

  @Get(ROUTE.CALLBACK)
  callBack() {
    return '';
  }

  @Get(ROUTE.FIND_COMPANY)
  checkCompanyNameUK() {
    return '';
  }
}
