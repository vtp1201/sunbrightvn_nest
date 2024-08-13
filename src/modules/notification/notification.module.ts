import { Module } from '@nestjs/common';

import { NotificationProcessor } from './notification.processor';
import { NotificationRepository } from './notification.repository';
import { NotificationService } from './notification.service';

@Module({
  imports: [],
  controllers: [],
  providers: [NotificationService, NotificationRepository, NotificationProcessor],
  exports: [NotificationService, NotificationProcessor],
})
export class NotificationModule {}
