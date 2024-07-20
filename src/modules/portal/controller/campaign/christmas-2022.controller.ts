import { Controller, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.CAMPAIGN.CHRISTMAS_2022;
@Controller()
@ApiTags(TAG)
export class Christmas2022Controller {
  constructor() {}

  @Post(ROUTE.CLICK)
  createClick() {
    return '';
  }

  @Post(ROUTE.CUSTOMER)
  createCustomerCampaignChristmas2022() {
    return '';
  }

  @Put(ROUTE.VOUCHER)
  updateVoucher() {
    return '';
  }
}
