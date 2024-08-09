import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { NotificationRepository } from './notification.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class NotificationService extends AbstractService<
  MODEL_NAME.NOTIFICATION,
  NotificationRepository
> {
  constructor(repository: NotificationRepository) {
    super(repository);
  }
}
