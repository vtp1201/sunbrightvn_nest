import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.DASHBOARD.ORDER;
@Controller()
@ApiTags(TAG)
export class OrderDashboardController {
  constructor() {}

  @Get(ROUTE.ANALYTIC)
  analytic() {
    return '';
  }
}
