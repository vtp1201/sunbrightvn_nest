import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.NOTE;
@Controller()
@ApiTags(TAG)
export class NoteController {
  constructor() {}

  @Post(ROUTE.BASE)
  createNote() {
    return '';
  }

  @Get(ROUTE.CUSTOMER)
  getNotesCustomer() {
    return '';
  }

  @Get(ROUTE.SERVICE)
  getNotesService() {
    return '';
  }

  @Get(ROUTE.FINANCIAL)
  getNotesFinancial() {
    return '';
  }

  @Get(ROUTE.PAYER)
  getNotesPayer() {
    return '';
  }

  @Get(ROUTE.REFERENCE_CUSTOMER)
  getNotesReferenceCustomer() {
    return '';
  }

  @Get(ROUTE.REFERENCE_SERVICE)
  getNotesReferenceService() {
    return '';
  }

  @Get(ROUTE.REFERENCE_FINANCIAL)
  getNotesReferenceFinancial() {
    return '';
  }
}
