import { Module } from '@nestjs/common';

import {
  AnswerModule,
  CompanyMemberModule,
  NoteModule,
  ProcessModule,
  QuestionModule,
} from '@modules';

import {
  CustomerController,
  FinancialController,
  NoteController,
  RiskRatingController,
  ServiceController,
} from './controllers';
import {
  ComplianceRiskAssessmentFormService,
  CustomerFormService,
  FinancialFormService,
  ServiceFormService,
} from './services';

@Module({
  imports: [ProcessModule, QuestionModule, AnswerModule, CompanyMemberModule, NoteModule],
  providers: [
    ComplianceRiskAssessmentFormService,
    CustomerFormService,
    FinancialFormService,
    ServiceFormService,
  ],
  controllers: [
    CustomerController,
    FinancialController,
    NoteController,
    RiskRatingController,
    ServiceController,
  ],
})
export class ComplianceRiskAssessmentFormModule {}
