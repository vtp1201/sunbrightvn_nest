import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.STATISTIC.BOD;
@Controller()
@ApiTags(TAG)
export class BODController {
  constructor() {}

  @Get(ROUTE.NEW_CONTACT)
  getStatisticTarget() {
    return '';
  }

  @Get(ROUTE.ORDER_PAID)
  getOrderPaid() {
    return '';
  }

  @Get(ROUTE.COST)
  getCostGGAds() {
    return '';
  }

  @Get(ROUTE.REFRESH_TOKEN)
  getRefreshToken() {
    return '';
  }

  @Get(ROUTE.RATIO_EACH_SERVICE_MONTH)
  getOrderItemPaidEachServiceWithMonth() {
    return '';
  }

  @Get(ROUTE.RATIO_EACH_SERVICE_COUNTRY)
  getOrderItemPaidEachServiceWithCountry() {
    return '';
  }

  @Get(ROUTE.CUSTOMER_PAID_12_MONTH)
  getWorkloadIn12Month() {
    return '';
  }
}
