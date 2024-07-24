import { Module } from '@nestjs/common';

import { BusinessActivityRepository } from './business-activity.repository';
import { BusinessActivityService } from './business-activity.service';

@Module({
  imports: [],
  providers: [BusinessActivityService, BusinessActivityRepository],
  exports: [BusinessActivityService],
})
export class BusinessActivityModule {}
