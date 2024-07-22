import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.FILE;
@Controller()
@ApiTags(TAG)
export class FileController {
  constructor() {}

  @Post(ROUTE.BANKING)
  createFileBanking() {
    return '';
  }
}
