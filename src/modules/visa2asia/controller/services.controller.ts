import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.VISA2ASIA.SERVICES;
@Controller()
@ApiTags(TAG)
export class ServicesController {
  constructor() {}
  @Get(ROUTE.VN_ARRIVAL)
  getCountriesFreeDayVN() {
    return '';
  }

  @Get(ROUTE.SERVICES_COUNTRY__BY_ID)
  getServiceByCountry() {
    return '';
  }

  @Get(ROUTE.OPTIONS)
  getVisaOptions() {
    return '';
  }

  @Get(ROUTE.NATIONALITY)
  getApplicantCountry() {
    return '';
  }

  @Get(ROUTE.COUNTRIES)
  getCountries() {
    return '';
  }
}
