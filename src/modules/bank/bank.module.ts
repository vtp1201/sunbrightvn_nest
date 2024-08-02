import { Module } from '@nestjs/common';

import { BankRepository } from './bank.repository';
import { BankService } from './bank.service';

@Module({
  imports: [],
  providers: [BankService, BankRepository],
  exports: [BankService],
})
export class BankModule {}
