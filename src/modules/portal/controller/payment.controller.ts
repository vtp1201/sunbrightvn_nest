import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.PAYMENT;
@Controller()
@ApiTags(TAG)
export class PaymentController {
  constructor() {}

  @Post(ROUTE.BY_GATEWAY_ID)
  pay() {
    return '';
  }
}
