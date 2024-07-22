import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.RATE;
@Controller()
@ApiTags(TAG)
export class RateController {
  constructor() {}

  @Post(ROUTE.BASE)
  createRate() {
    return '';
  }
}
