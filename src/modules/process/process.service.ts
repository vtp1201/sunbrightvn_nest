import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { ProcessRepository } from './process.repository';

@Injectable()
export class ProcessService extends AbstractService<MODEL_NAME.PROCESS, ProcessRepository> {
  constructor(repository: ProcessRepository) {
    super(repository);
  }
}
