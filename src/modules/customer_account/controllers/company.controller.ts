import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.CUSTOMER_ACCOUNT.COMPANY;
@Controller()
@ApiTags(TAG)
export class CompanyController {
  constructor() {}

  @Get(ROUTE.BASE)
  list() {
    return '';
  }

  @Post(ROUTE.BASE)
  create() {
    return '';
  }

  @Get(ROUTE.VER_2)
  listCompany() {
    return '';
  }

  @Post(ROUTE.SENT_COMPANY_DOCUMENT)
  sendMailDocument() {
    return '';
  }

  @Get(ROUTE.BY_ID__DETAIL)
  getDetail() {
    return '';
  }

  @Get(ROUTE.BY_ID__DOCUMENT)
  getDocumentCompany() {
    return '';
  }

  @Get(ROUTE.BY_ID__EVENT)
  listEvent() {
    return '';
  }

  @Get(ROUTE.BY_ID__REVIEW_COMPLETE)
  reviewLegalService() {
    return '';
  }

  @Get(ROUTE.BY_ID__PROPOSED_NAME)
  listChangeProposedName() {
    return '';
  }

  @Get(ROUTE.BY_ID__SHARE_OWN_INTEREST)
  shareOwnInterest() {
    return '';
  }

  @Post(ROUTE.CHANGE_REQUEST)
  createChangeRequest() {}

  @Put(ROUTE.CHANGE_REQUEST__BY_ID)
  update() {}

  @Delete(ROUTE.CHANGE_REQUEST)
  delete() {}

  @Post(ROUTE.CHANGE_REQUEST__TRANSFER_SHARE)
  transferShare() {}

  @Put(ROUTE.PROPOSED_NAME)
  updateCompanyProposedName() {}

  @Get(ROUTE.BY_ID__HISTORY_CHANGED)
  historyChanged() {}

  @Get(ROUTE.BY_ID__COMPLETED_EVENT)
  getCompletedEventList() {}

  @Get(ROUTE.BY_ID__TRANSACTION_EVENT)
  listTransactionEventByCompanyId() {}

  @Get(ROUTE.BY_ID__DOWNLOAD_FILE)
  getFileDownloadList() {}
}
