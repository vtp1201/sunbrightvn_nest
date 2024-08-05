import { Module } from '@nestjs/common';

import { BankingProcessModule, BankModule, FeeModule, OrderModule, TaskModule } from '@modules';

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
  imports: [TaskModule, BankModule, BankingProcessModule, FeeModule, OrderModule],
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
