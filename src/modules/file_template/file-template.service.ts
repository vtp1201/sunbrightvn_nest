import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { FileTemplateRepository } from './file-template.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class FileTemplateService extends AbstractService<
  MODEL_NAME.FILE_TEMPLATE,
  FileTemplateRepository
> {
  constructor(repository: FileTemplateRepository) {
    super(repository);
  }
}
