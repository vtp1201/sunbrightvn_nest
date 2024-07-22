import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.ONBOARDING.COUNTRY;
@Controller()
@ApiTags(TAG)
export class CountryController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }

  @Get(ROUTE.COOPERATIVE)
  countriesCooperative() {
    return '';
  }

  @Get(ROUTE.INCORPORATION)
  countriesHasServices() {
    return '';
  }

  @Get(ROUTE.ENTITY_SUFFIX)
  entitySuffixByCountry() {
    return '';
  }

  @Get(ROUTE.COUNTRY_FEE)
  countryFee() {
    return '';
  }
}
