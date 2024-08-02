import { Module } from '@nestjs/common';

import { TaskModule } from '@modules';

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
  imports: [TaskModule],
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
