import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.NOTIFICATION_FORM;
@Controller()
@ApiTags(TAG)
export class NotificationFormController {
  constructor() {}

  @Post(ROUTE.BVI_QUIZZ)
  notify() {
    return '';
  }
}
