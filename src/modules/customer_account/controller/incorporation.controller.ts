import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.INCORPORATION;
@Controller()
@ApiTags(TAG)
export class IncorporationController {
  constructor() {}

  @Get(ROUTE.COUNTRY__BY_ID)
  companyInfoByCountry() {
    return '';
  }

  @Get(ROUTE.ANCILLARY_SERVICES_OUTSIDE)
  ancillaryServicesOutsideCompany() {
    return '';
  }

  @Post(ROUTE.STRIPE)
  stripe() {
    return '';
  }

  @Post(ROUTE.BANK)
  bank() {
    return '';
  }

  @Post(ROUTE.ADD_SERVICES__STRIPE)
  addServiceExistedCompany() {
    return '';
  }

  @Post(ROUTE.ADD_SERVICES__BANK)
  handleDiscountService() {
    return '';
  }

  @Get(ROUTE.SUBSCRIPTION)
  getSubscription() {
    return '';
  }

  @Get(ROUTE.MEMBERSHIP)
  getMembership() {
    return '';
  }

  @Post(ROUTE.EXIST_ORDER__STRIPE)
  createExistOrderStripe() {
    return '';
  }

  @Post(ROUTE.PAYMENT_INTENT)
  createPaymentIntent() {
    return '';
  }

  @Post(ROUTE.PAYMENT_INTENT__EXIST_ORDER)
  createPaymentExistOrder() {
    return '';
  }

  @Post(ROUTE.PAYMENT_INTENT__ADD_SERVICES)
  createPaymentAddService() {
    return '';
  }
}
