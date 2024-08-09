import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { AnswerRepository } from './answer.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class AnswerService extends AbstractService<MODEL_NAME.ANSWER, AnswerRepository> {
  constructor(repository: AnswerRepository) {
    super(repository);
  }

  getAnswerByGroup = this.repository.getAnswerByGroup;
}
