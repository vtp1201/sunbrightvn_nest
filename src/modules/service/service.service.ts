import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { ServiceRepository } from './service.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class ServiceService extends AbstractService<MODEL_NAME.SERVICE, ServiceRepository> {
  constructor(repository: ServiceRepository) {
    super(repository);
  }
}
