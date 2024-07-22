import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.TRUSTPILOT;
@Controller()
@ApiTags(TAG)
export class TrustpilotController {
  constructor() {}

  @Get(ROUTE.BASE)
  getLatestTrustpilotReport() {
    return '';
  }
}
