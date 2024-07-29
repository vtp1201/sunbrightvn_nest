import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { QuestionRepository } from './question.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class QuestionService extends AbstractService<MODEL_NAME.QUESTION, QuestionRepository> {
  constructor(repository: QuestionRepository) {
    super(repository);
  }
}
