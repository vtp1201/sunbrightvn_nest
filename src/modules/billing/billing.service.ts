import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { BillingRepository } from './billing.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class BillingService extends AbstractService<MODEL_NAME.BILLING, BillingRepository> {
  constructor(repository: BillingRepository) {
    super(repository);
  }

  updateXeroContact = this.repository.updateXeroContact;
}
