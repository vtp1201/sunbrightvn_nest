import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { QueryNoteDTO } from '../dtos';
import { ComplianceRiskAssessmentFormService } from '../services';

import { NOTE_TYPE, ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.NOTE;
@Controller()
@ApiTags(TAG)
export class NoteController {
  constructor(private complianceRiskAssessmentForm: ComplianceRiskAssessmentFormService) {}

  @Post(ROUTE.BASE)
  createNote() {
    return;
  }

  @Get(ROUTE.CUSTOMER)
  async getNotesCustomer(@Query() query: QueryNoteDTO) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_CUSTOMER_RISK_FORM,
    );
  }

  @Get(ROUTE.SERVICE)
  async getNotesService(@Query() query: QueryNoteDTO) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_SERVICE_RISK_FORM,
    );
  }

  @Get(ROUTE.FINANCIAL)
  async getNotesFinancial(@Query() query: QueryNoteDTO) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_FINANCIAL_RISK_FORM,
    );
  }

  @Get(ROUTE.PAYER)
  async getNotesPayer(@Query() query: QueryNoteDTO) {
    return await this.complianceRiskAssessmentForm.getNotes(query, NOTE_TYPE.NOTE_PAYER_FORM);
  }

  @Get(ROUTE.REFERENCE_CUSTOMER)
  async getNotesReferenceCustomer(@Query() query: QueryNoteDTO) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_REFERENCE_CUSTOMER,
    );
  }

  @Get(ROUTE.REFERENCE_SERVICE)
  async getNotesReferenceService(@Query() query: QueryNoteDTO) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_REFERENCE_SERVICE,
    );
  }

  @Get(ROUTE.REFERENCE_FINANCIAL)
  async getNotesReferenceFinancial(@Query() query: QueryNoteDTO) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_REFERENCE_FINANCIAL,
    );
  }
}
