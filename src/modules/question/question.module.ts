import { Module } from '@nestjs/common';

import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';

@Module({
  imports: [],
  controllers: [],
  providers: [QuestionService, QuestionRepository],
  exports: [QuestionService],
})
export class QuestionModule {}
