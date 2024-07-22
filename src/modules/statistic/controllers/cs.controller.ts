import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.STATISTIC.CS;
@Controller()
@ApiTags(TAG)
export class CSController {
  constructor() {}

  @Get(ROUTE.TOP_RANK_CS)
  getTopRankCS() {
    return '';
  }

  @Get(ROUTE.TARGET_TEAM)
  getTargetTeam() {
    return '';
  }

  @Get(ROUTE.PERFORMANCE_OVERTIME)
  getPerformanceOverTime() {
    return '';
  }

  @Get(ROUTE.YOUR_PERFORMANCE)
  getYourPerformance() {
    return '';
  }
}
