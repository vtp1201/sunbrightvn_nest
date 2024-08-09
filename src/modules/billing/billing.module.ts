import { Module } from '@nestjs/common';

import { BillingRepository } from './billing.repository';
import { BillingService } from './billing.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BillingService, BillingRepository],
  exports: [BillingService],
})
export class BillingModule {}
