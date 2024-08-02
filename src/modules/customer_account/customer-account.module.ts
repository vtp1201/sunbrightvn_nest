import { Module } from '@nestjs/common';

import { BankingProcessModule, BankModule, TaskModule } from '@modules';

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
  imports: [TaskModule, BankModule, BankingProcessModule],
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
