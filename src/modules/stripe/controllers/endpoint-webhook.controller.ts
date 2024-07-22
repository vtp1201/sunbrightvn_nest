import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.STRIPE.ENDPOINT_WEBHOOK;
@Controller()
@ApiTags(TAG)
export class EndpointWebhookController {
  constructor() {}

  @Post(ROUTE.BY_ID)
  payNow() {
    return '';
  }
}
