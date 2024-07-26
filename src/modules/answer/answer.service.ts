import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { AnswerRepository } from './answer.repository';

@Injectable()
export class AnswerService extends AbstractService<MODEL_NAME.ANSWER, AnswerRepository> {
  constructor(repository: AnswerRepository) {
    super(repository);
  }
}
