import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.GLEADSSG.STATIC_DATA;
@Controller()
@ApiTags(TAG)
export class StaticDataController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }
}
