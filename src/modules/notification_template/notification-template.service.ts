import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { NotificationTemplateRepository } from './notification-template.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class NotificationTemplateService extends AbstractService<
  MODEL_NAME.NOTIFICATION_TEMPLATE,
  NotificationTemplateRepository
> {
  constructor(repository: NotificationTemplateRepository) {
    super(repository);
  }
}
