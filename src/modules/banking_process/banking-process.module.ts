import { Module } from '@nestjs/common';

import { BankingProcessRepository } from './banking-process.repository';
import { BankingProcessService } from './banking-process.service';

@Module({
  imports: [],
  providers: [BankingProcessService, BankingProcessRepository],
  exports: [BankingProcessService],
})
export class BankingProcessModule {}
