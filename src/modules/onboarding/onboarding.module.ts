import { Module } from '@nestjs/common';

import {
  BankingController,
  CheckNameController,
  CountryController,
  CustomerController,
  EnumController,
  OrderController,
  ServiceController,
  TrackingController,
} from './controllers';

@Module({
  imports: [],
  controllers: [
    BankingController,
    CheckNameController,
    CountryController,
    CustomerController,
    EnumController,
    OrderController,
    ServiceController,
    TrackingController,
  ],
})
export class OnboardingModule {}
