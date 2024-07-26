import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

import { FilterDTO } from '../dtos/filter.dto';
import { BusinessActivityBBCSGService } from '../services';

const { ROUTE, TAG } = ROUTES.BBCSG.BUSINESS_ACTIVITY;
@Controller()
@ApiTags(TAG)
export class BusinessActivityController {
  constructor(private readonly service: BusinessActivityBBCSGService) {}

  @Get(ROUTE.FILTER)
  async filter(@Query() filter: FilterDTO) {
    return await this.service.filter({
      country: filter.country,
      searchString: filter.searchString,
    });
  }
}
