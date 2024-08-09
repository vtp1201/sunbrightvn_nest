import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { CompanyRepository } from './company.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class CompanyService extends AbstractService<MODEL_NAME.COMPANY, CompanyRepository> {
  constructor(repository: CompanyRepository) {
    super(repository);
  }

  updateXeroContact = this.repository.updateXeroContact;
}
