import { Controller, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.BOOKKEEPER_PROCESS;
@Controller()
@ApiTags(TAG)
export class BookkeeperProcessController {
  constructor() {}

  @Put(ROUTE.ORDER_FORM__BY_TASK_ID)
  updateForm() {
    return '';
  }

  @Post(ROUTE.ORDER_FORM__BY_TASK_ID)
  createFile() {
    return '';
  }
}
