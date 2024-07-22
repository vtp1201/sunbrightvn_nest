import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

import { BBCSGService } from '../bbcsg.service';

const { ROUTE, TAG } = ROUTES.BBCSG.STATIC_DATA;

@Controller()
@ApiTags(TAG)
export class StaticDataController {
  constructor(private readonly service: BBCSGService) {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }
}
