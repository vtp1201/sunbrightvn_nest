import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { QueryNoteDto } from '../dtos';
import { ComplianceRiskAssessmentFormService } from '../services';

import { NOTE_TYPE, ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.COMPLIANCE_RISK_ASSESSMENT_FORM.NOTE;
@Controller()
@ApiTags(TAG)
export class NoteController {
  constructor(private complianceRiskAssessmentForm: ComplianceRiskAssessmentFormService) {}

  @ApiResponse({ status: HttpStatus.CREATED })
  @Post(ROUTE.BASE)
  async createNote(@Body() body: any) {
    return await this.complianceRiskAssessmentForm.createNote(body, 3);
  }

  @Get(ROUTE.CUSTOMER)
  async getNotesCustomer(@Query() query: QueryNoteDto) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_CUSTOMER_RISK_FORM,
    );
  }

  @Get(ROUTE.SERVICE)
  async getNotesService(@Query() query: QueryNoteDto) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_SERVICE_RISK_FORM,
    );
  }

  @Get(ROUTE.FINANCIAL)
  async getNotesFinancial(@Query() query: QueryNoteDto) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_FINANCIAL_RISK_FORM,
    );
  }

  @Get(ROUTE.PAYER)
  async getNotesPayer(@Query() query: QueryNoteDto) {
    return await this.complianceRiskAssessmentForm.getNotes(query, NOTE_TYPE.NOTE_PAYER_FORM);
  }

  @Get(ROUTE.REFERENCE_CUSTOMER)
  async getNotesReferenceCustomer(@Query() query: QueryNoteDto) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_REFERENCE_CUSTOMER,
    );
  }

  @Get(ROUTE.REFERENCE_SERVICE)
  async getNotesReferenceService(@Query() query: QueryNoteDto) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_REFERENCE_SERVICE,
    );
  }

  @Get(ROUTE.REFERENCE_FINANCIAL)
  async getNotesReferenceFinancial(@Query() query: QueryNoteDto) {
    return await this.complianceRiskAssessmentForm.getNotes(
      query,
      NOTE_TYPE.NOTE_REFERENCE_FINANCIAL,
    );
  }
}
