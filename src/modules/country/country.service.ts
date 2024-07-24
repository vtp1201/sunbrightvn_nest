import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { CountryRepository } from './country.repository';

@Injectable()
export class CountryService extends AbstractService<
  MODEL_NAME.BUSINESS_ACTIVITY,
  CountryRepository
> {
  constructor(repository: CountryRepository) {
    super(repository);
  }
}
