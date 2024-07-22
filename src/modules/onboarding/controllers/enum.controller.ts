import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.ONBOARDING.ENUM;
@Controller()
@ApiTags(TAG)
export class EnumController {
  constructor() {}

  @Get(ROUTE.BY_MODEL_NAME)
  list() {
    return '';
  }
}
