import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.TOOLS.SSIC_SINGAPORE;
@Controller()
@ApiTags(TAG)
export class SSICSingaporeController {
  constructor() {}

  @Get(ROUTE.BASE)
  filter() {
    return '';
  }

  @Get(ROUTE.COMMON)
  filterCommon() {
    return '';
  }
}
