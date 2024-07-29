import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { CountryRepository } from './country.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class CountryService extends AbstractService<
  MODEL_NAME.BUSINESS_ACTIVITY,
  CountryRepository
> {
  constructor(repository: CountryRepository) {
    super(repository);
  }
}
