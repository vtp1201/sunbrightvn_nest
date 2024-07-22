import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.SUNBRIGHTVN.CONTACT_FORM;
@Controller()
@ApiTags(TAG)
export class ContactFormController {
  constructor() {}

  @Post(ROUTE.BASE)
  contactForm() {
    return '';
  }
}
