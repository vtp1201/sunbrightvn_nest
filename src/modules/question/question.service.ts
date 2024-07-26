import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionService extends AbstractService<MODEL_NAME.QUESTION, QuestionRepository> {
  constructor(repository: QuestionRepository) {
    super(repository);
  }
}
