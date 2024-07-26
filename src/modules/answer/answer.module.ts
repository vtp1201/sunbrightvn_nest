import { Module } from '@nestjs/common';

import { AnswerRepository } from './answer.repository';
import { AnswerService } from './answer.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AnswerService, AnswerRepository],
  exports: [AnswerService],
})
export class AnswerModule {}
