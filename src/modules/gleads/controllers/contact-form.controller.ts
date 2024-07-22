import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.GLEADS.CONTACT_FORM;
@Controller()
@ApiTags(TAG)
export class ContactFormController {
  constructor() {}

  @Post(ROUTE.BASE)
  contactWithCategories() {
    return '';
  }
}
