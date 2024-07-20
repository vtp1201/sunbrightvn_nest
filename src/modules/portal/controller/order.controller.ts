import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.ORDER;
@Controller()
@ApiTags(TAG)
export class OrderController {
  constructor() {}

  @Get(ROUTE.BY_ORDER_CODE)
  get() {
    return '';
  }

  @Get(ROUTE.CLIENT__BY_SIGNATURE)
  customerStep2() {
    return '';
  }

  @Get(ROUTE.V2A__BY_ORDER_CODE)
  getV2a() {
    return '';
  }

  @Post(ROUTE.STEP1)
  step1() {
    return '';
  }

  @Post(ROUTE.STEP3)
  step3() {
    return '';
  }

  @Post(ROUTE.STEP4__PAYPAL)
  step4() {
    return 'paypal()';
  }

  @Post(ROUTE.PAYPAL_EXECUTE)
  paypalAuthorize() {
    return '';
  }

  @Post(ROUTE.AUTHORIZE_MAKE_PAYMENT)
  paypalAuthorizeMakePayment() {
    return '';
  }

  @Post(ROUTE.SEND_EMAIL_PENDING)
  executeSendMailPending() {
    return '';
  }

  @Post(ROUTE.SEND_EMAIL_FAIL)
  executeSendMailFail() {
    return '';
  }

  @Post(ROUTE.MK_PAYMENT_CANCEL)
  mkPaymentFailed() {
    return '';
  }

  @Post(ROUTE.V2A_STEP2)
  v2aStep2() {
    return '';
  }
}
