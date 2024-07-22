import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.CHECKNAME;
@Controller()
@ApiTags(TAG)
export class CheckNameController {
  constructor() {}

  @Get(ROUTE.UK)
  checkCompanyNameUK() {
    return '';
  }
}
