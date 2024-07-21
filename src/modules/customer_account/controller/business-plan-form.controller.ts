import { Controller, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.BUSINESS_PLAN_FORM;
@Controller()
@ApiTags(TAG)
export class BusinessPlanFormController {
  constructor() {}

  @Put(ROUTE.UPDATE_FORM__BY_ID)
  updateForm() {
    return '';
  }
}
