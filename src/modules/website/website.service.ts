import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { WebsiteRepository } from './website.repository';

@Injectable()
export class WebsiteService extends AbstractService<MODEL_NAME.WEBSITE, WebsiteRepository> {
  constructor(repository: WebsiteRepository) {
    super(repository);
  }
}
