import { Module } from '@nestjs/common';

import { ProcessRepository } from './process.repository';
import { ProcessService } from './process.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ProcessService, ProcessRepository],
  exports: [ProcessService],
})
export class ProcessModule {}
