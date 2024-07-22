import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.TOOLS.ACRA_SG;
@Controller()
@ApiTags(TAG)
export class SingaporeACRAController {
  constructor() {}

  @Get(ROUTE.BASE)
  getCompanyName() {
    return '';
  }
}
