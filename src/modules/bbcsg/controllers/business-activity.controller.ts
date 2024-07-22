import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

import { BBCSGService } from '../bbcsg.service';
import { FilterDto } from '../dtos/filter.dto';

const { ROUTE, TAG } = ROUTES.BBCSG.BUSINESS_ACTIVITY;
@Controller()
@ApiTags(TAG)
export class BusinessActivityController {
  constructor(private readonly service: BBCSGService) {}

  @Get(ROUTE.FILTER)
  filter(@Query() filter: FilterDto) {
    return filter;
  }
}
