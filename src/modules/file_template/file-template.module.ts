import { Module } from '@nestjs/common';

import { FileTemplateRepository } from './file-template.repository';
import { FileTemplateService } from './file-template.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FileTemplateRepository, FileTemplateService],
  exports: [FileTemplateService],
})
export class FileTemplateModule {}
