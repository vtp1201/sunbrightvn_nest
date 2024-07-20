import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.ENUM;
@Controller()
@ApiTags(TAG)
export class EnumController {
  constructor() {}

  @Get(ROUTE.COUNTRY)
  listCountry() {
    return '';
  }

  @Post(ROUTE.COUNTRY__INCORPORATION)
  listCountryIncorporation() {
    return '';
  }

  @Get(ROUTE.INDUSTRY)
  industriesB2B() {
    return '';
  }
}
