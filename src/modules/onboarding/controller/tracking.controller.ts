import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.ONBOARDING.TRACKING;
@Controller()
@ApiTags(TAG)
export class TrackingController {
  constructor() {}

  @Post(ROUTE.EMAIL_WHITE_PAGE)
  sendEmailTrackingWhitePage() {
    return '';
  }
}
