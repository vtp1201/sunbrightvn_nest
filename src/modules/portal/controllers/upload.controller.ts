import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.UPLOAD;
@Controller()
@ApiTags(TAG)
export class UploadController {
  constructor() {}

  @Post(ROUTE.BASE)
  save() {
    return '';
  }
}
