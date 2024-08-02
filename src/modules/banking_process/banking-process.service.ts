import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { BankingProcessRepository } from './banking-process.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class BankingProcessService extends AbstractService<
  MODEL_NAME.BANKING_PROCESS,
  BankingProcessRepository
> {
  constructor(repository: BankingProcessRepository) {
    super(repository);
  }
}
