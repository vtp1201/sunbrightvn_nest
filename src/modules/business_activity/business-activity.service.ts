import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { BusinessActivityRepository } from './business-activity.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class BusinessActivityService extends AbstractService<
  MODEL_NAME.BUSINESS_ACTIVITY,
  BusinessActivityRepository
> {
  constructor(repository: BusinessActivityRepository) {
    super(repository);
  }
}
