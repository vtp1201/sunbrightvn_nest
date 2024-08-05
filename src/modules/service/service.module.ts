import { Module } from '@nestjs/common';

import { ServiceRepository } from './service.repository';
import { ServiceService } from './service.service';

@Module({
  imports: [],
  providers: [ServiceService, ServiceRepository],
  exports: [ServiceService],
})
export class ServiceModule {}
