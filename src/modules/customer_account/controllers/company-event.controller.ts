import { Controller, Get, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.COMPANY_EVENT;
@Controller()
@ApiTags(TAG)
export class CompanyEventController {
  constructor() {}

  @Put(ROUTE.TYPES)
  updateTypes() {
    return '';
  }

  @Get(ROUTE.UPCOMING)
  getUpcomingEvent() {
    return '';
  }
}
