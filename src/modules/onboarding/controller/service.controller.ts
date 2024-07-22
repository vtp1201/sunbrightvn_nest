import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.ONBOARDING.SERVICE;
@Controller()
@ApiTags(TAG)
export class ServiceController {
  constructor() {}

  @Get(ROUTE.BASE)
  servicesCountry() {
    return '';
  }

  @Get(ROUTE.BANK)
  servicesBankCountry() {
    return '';
  }

  @Get(ROUTE.ANNUAL)
  servicesAnnualFee() {
    return '';
  }
}
