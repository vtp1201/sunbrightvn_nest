import { Module } from '@nestjs/common';

import {
  CustomerController,
  FinancialController,
  NoteController,
  RiskRatingController,
  ServiceController,
} from './controller';

@Module({
  imports: [],
  controllers: [
    CustomerController,
    FinancialController,
    NoteController,
    RiskRatingController,
    ServiceController,
  ],
})
export class ComplianceRiskAssessmentFormModule {}
