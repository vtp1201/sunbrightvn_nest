import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.HOLIDAY;
@Controller()
@ApiTags(TAG)
export class HolidayController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }
}
