import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { PersonRepository } from './person.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class PersonService extends AbstractService<MODEL_NAME.PERSON, PersonRepository> {
  constructor(repository: PersonRepository) {
    super(repository);
  }
}
