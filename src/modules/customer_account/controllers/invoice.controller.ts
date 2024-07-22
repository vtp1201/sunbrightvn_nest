import { Controller, Delete, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.INVOICE;
@Controller()
@ApiTags(TAG)
export class InvoiceController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }

  @Delete(ROUTE.BY_ID)
  deleteOrder() {
    return '';
  }
}
