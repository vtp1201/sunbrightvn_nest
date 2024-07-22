import { Module } from '@nestjs/common';

import {
  BankingController,
  BillingController,
  BookkeeperProcessController,
  BusinessPlanFormController,
  CheckNameController,
  CompanyController,
  CompanyEventController,
  FileController,
  HolidayController,
  IncorporationController,
  InvoiceController,
  MessageController,
  OrderController,
  OrderDashboardController,
  OrderFormController,
  ProcessController,
  SupportCaseController,
  TaskController,
} from './controllers';

@Module({
  imports: [],
  controllers: [
    BankingController,
    BillingController,
    BookkeeperProcessController,
    BusinessPlanFormController,
    CheckNameController,
    CompanyController,
    CompanyEventController,
    FileController,
    HolidayController,
    IncorporationController,
    InvoiceController,
    MessageController,
    OrderController,
    OrderDashboardController,
    OrderFormController,
    ProcessController,
    SupportCaseController,
    TaskController,
  ],
})
export class CustomerAccountModule {}
