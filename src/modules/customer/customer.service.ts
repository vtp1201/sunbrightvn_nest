import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { CustomerRepository } from './customer.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class CustomerService extends AbstractService<MODEL_NAME.CUSTOMER, CustomerRepository> {
  constructor(repository: CustomerRepository) {
    super(repository);
  }

  updateXeroContact = this.repository.updateXeroContact;
}
