import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { FileRepository } from './file.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class FileService extends AbstractService<MODEL_NAME.FILE, FileRepository> {
  constructor(repository: FileRepository) {
    super(repository);
  }
}
