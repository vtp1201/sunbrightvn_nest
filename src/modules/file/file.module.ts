import { Module } from '@nestjs/common';

import { FileRepository } from './file.repository';
import { FileService } from './file.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FileService, FileRepository],
  exports: [FileService],
})
export class FileModule {}
