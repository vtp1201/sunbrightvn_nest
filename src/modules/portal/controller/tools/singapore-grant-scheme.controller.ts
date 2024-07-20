import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.PORTAL.TOOLS.GRANT_SCHEME;
@Controller()
@ApiTags(TAG)
export class SingaporeGrantSchemeController {
  constructor() {}

  @Get(ROUTE.BASE)
  getQuestion() {
    return '';
  }

  @Get(ROUTE.GRANT_TYPE)
  getGrantTypes() {
    return '';
  }
  @Post(ROUTE.MAIL_SEND_ME_PROGRAM_DETAILS)
  emailSendMeProgramDetails() {
    return '';
  }
}
