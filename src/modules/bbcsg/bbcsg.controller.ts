import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

import { BBCSGService } from './bbcsg.service';
import { FilterDto } from './dto/filter.dto';

const { ROUTE, TAG } = ROUTES.BBCSG;

@Controller()
@ApiTags(TAG)
export class BBCSGController {
  constructor(private readonly service: BBCSGService) {}

  @Get(ROUTE.BUSINESS_ACTIVITY__FILTER)
  filter(@Query() filter?: FilterDto) {
    return filter;
  }

  @Get(ROUTE.COMPANY_NAME_CHECK__SEARCH)
  checkName() {
    return '';
  }

  @Get(ROUTE.STATIC_DATA)
  list() {
    return '';
  }
}
