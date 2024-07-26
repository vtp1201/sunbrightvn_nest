import { Module } from '@nestjs/common';

import { AnswerModule } from '@modules/answer/answer.module';
import { ProcessModule } from '@modules/process/process.module';
import { QuestionModule } from '@modules/question/question.module';

import {
  CustomerController,
  FinancialController,
  NoteController,
  RiskRatingController,
  ServiceController,
} from './controllers';

@Module({
  imports: [ProcessModule, QuestionModule, AnswerModule],
  controllers: [
    CustomerController,
    FinancialController,
    NoteController,
    RiskRatingController,
    ServiceController,
  ],
})
export class ComplianceRiskAssessmentFormModule {}
