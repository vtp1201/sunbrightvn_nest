import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.RISK_RATING;
@Controller()
@ApiTags(TAG)
export class RiskRatingController {
  constructor() {}

  @Get(ROUTE.BASE)
  createOrUpdateRiskRating() {
    return '';
  }
}
