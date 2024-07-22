import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.VISA2ASIA.POST;
@Controller()
@ApiTags(TAG)
export class PostController {
  constructor() {}
  @Get(ROUTE.PREVIEW)
  getPostPreview() {
    return '';
  }

  @Get(ROUTE.BY_GUID)
  getPost() {
    return '';
  }

  @Get(ROUTE.BASE)
  getAllPost() {
    return '';
  }
}
