import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { BankRepository } from './bank.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class BankService extends AbstractService<MODEL_NAME.BANK, BankRepository> {
  constructor(repository: BankRepository) {
    super(repository);
  }
}
