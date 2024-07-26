import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.BBCSG.COMPANY_NAME_CHECK;

@Controller()
@ApiTags(TAG)
export class CompanyNameCheckController {
  constructor() {}

  @Get(ROUTE.SEARCH)
  checkName() {
    return '';
  }
}
