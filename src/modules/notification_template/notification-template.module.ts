import { Module } from '@nestjs/common';

import { NotificationTemplateRepository } from './notification-template.repository';
import { NotificationTemplateService } from './notification-template.service';

@Module({
  imports: [],
  controllers: [],
  providers: [NotificationTemplateService, NotificationTemplateRepository],
  exports: [NotificationTemplateService],
})
export class NotificationTemplateModule {}
