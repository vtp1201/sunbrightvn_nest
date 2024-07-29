import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { ProcessRepository } from './process.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class ProcessService extends AbstractService<MODEL_NAME.PROCESS, ProcessRepository> {
  constructor(repository: ProcessRepository) {
    super(repository);
  }
}
