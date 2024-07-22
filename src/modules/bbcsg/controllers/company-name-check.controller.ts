import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

import { BBCSGService } from '../bbcsg.service';

const { ROUTE, TAG } = ROUTES.BBCSG.COMPANY_NAME_CHECK;

@Controller()
@ApiTags(TAG)
export class CompanyNameCheckController {
  constructor(private readonly service: BBCSGService) {}

  @Get(ROUTE.SEARCH)
  checkName() {
    return '';
  }
}
