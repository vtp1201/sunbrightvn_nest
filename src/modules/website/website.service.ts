import { AbstractService } from '@abstracts';
import { Injectable } from '@nestjs/common';
import { WebsiteRepository } from './website.repository';
import { MODEL_NAME } from '@utilities';

@Injectable()
export class WebsiteService extends AbstractService<
  MODEL_NAME.WEBSITE,
  WebsiteRepository
> {
  constructor(repository: WebsiteRepository) {
    super(repository);
  }
}
