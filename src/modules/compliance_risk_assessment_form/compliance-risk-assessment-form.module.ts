import { Module } from '@nestjs/common';

import { AnswerModule } from '@modules/answer/answer.module';
import { CompanyMemberModule } from '@modules/company_member/company-member.module';
import { NoteModule } from '@modules/note/note.module';
import { ProcessModule } from '@modules/process/process.module';
import { QuestionModule } from '@modules/question/question.module';

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
