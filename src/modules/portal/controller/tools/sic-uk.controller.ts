import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.TOOLS.SIC_UK;
@Controller()
@ApiTags(TAG)
export class SicUKController {
  constructor() {}

  @Get(ROUTE.BASE)
  filter() {
    return '';
  }
}
