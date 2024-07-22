import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.MAILCHIMP;
@Controller()
@ApiTags(TAG)
export class MailchimpController {
  constructor() {}

  @Post(ROUTE.SUBSCRIPTION_CONFIRMED)
  subscriptionConfirmed() {
    return '';
  }
}
