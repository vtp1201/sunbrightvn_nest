import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.ORDER_FORM;
@Controller()
@ApiTags(TAG)
export class OrderFormController {
  constructor() {}

  @Put(ROUTE.BY_TASK_ID)
  updateForm() {
    return '';
  }

  @Get(ROUTE.BY_ORDER_ID)
  getOrderFormDetails() {
    return '';
  }

  @Get(ROUTE.LIST_SIGN_ORDER_FORM__BY_COMPANY_ID)
  getListMemberOrderForm() {
    return '';
  }

  @Get(ROUTE.LIST_SIGN_INCORPORATION_FORM__BY_COMPANY_ID)
  getListMemberSignIncorporationForm() {
    return '';
  }

  @Get(ROUTE.PROPOSE_NAME__BY_TASK_ID)
  getListProposeName() {
    return '';
  }

  @Post(ROUTE.PROPOSE_NAME__BULK)
  bulkCreateProposedName() {
    return '';
  }

  @Post(ROUTE.PROPOSE_NAME)
  createProposedName() {
    return '';
  }

  @Put(ROUTE.PROPOSE_NAME__BULK)
  bulkUpdateProposedName() {
    return '';
  }

  @Put(ROUTE.PROPOSE_NAME__BY_PROPOSED_NAME_ID)
  updateProposedName() {
    return '';
  }

  @Delete(ROUTE.PROPOSE_NAME__BY_PROPOSED_NAME_ID)
  deleteProposedName() {
    return '';
  }

  @Put(ROUTE.CUSTOMER__PROPOSED_NAME__BY_PROPOSE_NAME_ID)
  updateCompanyProposedName() {
    return '';
  }

  @Post(ROUTE.CUSTOMER__PROPOSED_NAME)
  customerConfirmProposedName() {
    return '';
  }

  @Post(ROUTE.CHANGE_REQUEST__TRANSFER_SHARE)
  transferShare() {
    return '';
  }

  @Post(ROUTE.CHANGE_REQUEST)
  createChangeRequest() {
    return '';
  }

  @Put(ROUTE.CHANGE_REQUEST__BY_ID)
  updateChangeRequest() {
    return '';
  }

  @Delete(ROUTE.CHANGE_REQUEST)
  deleteChangeRequest() {
    return '';
  }

  @Put(ROUTE.COMPANY_MEMBER__APPOINT_SIGN)
  appointSign() {
    return '';
  }

  @Put(ROUTE.COMPANY_MEMBER_LEVEL2__BY_ID)
  updateCompanyMemberLevel2() {
    return '';
  }

  @Post(ROUTE.COMPANY_MEMBER_LEVEL2)
  createCompanyMemberLevel2() {
    return '';
  }

  @Delete(ROUTE.COMPANY_MEMBER_LEVEL2__BY_ID)
  deleteCompanyMemberLevel2() {
    return '';
  }
}
