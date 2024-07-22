import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.ONBOARDING.ORDER;
@Controller()
@ApiTags(TAG)
export class OrderController {
  constructor() {}

  @Post(ROUTE.INCORP)
  createOrderIncorp() {
    return '';
  }

  @Post(ROUTE.BANKING)
  createOrderBanking() {
    return '';
  }

  @Post(ROUTE.PAYMENT__STRIPE)
  step4stripe() {
    return '';
  }

  @Post(ROUTE.PAYMENT_FAIL)
  executeSendMailFail() {
    return '';
  }

  @Post(ROUTE.SEND_EMAIL_PENDING)
  executeSendMailPending() {
    return '';
  }

  @Put(ROUTE.CLIENT__BY_SIGNATURE)
  updateDetails() {
    return '';
  }

  @Get(ROUTE.CLIENT__BY_SIGNATURE)
  verifySignature() {
    return '';
  }

  @Get(ROUTE.BY_ORDER_CODE)
  get() {
    return '';
  }

  @Post(ROUTE.PAYMENT_INTENT__STRIPE)
  paymentIntentOnboarding() {
    return '';
  }

  @Post(ROUTE.GET_PRICING_GUIDE)
  getPricingGuide() {
    return '';
  }
}
