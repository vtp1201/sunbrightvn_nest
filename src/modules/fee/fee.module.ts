import { Module } from '@nestjs/common';

import { ServiceModule } from '@modules';

import { FeeRepository } from './fee.repository';
import { FeeService } from './fee.service';

@Module({
  imports: [ServiceModule],
  providers: [FeeService, FeeRepository],
  exports: [FeeService],
})
export class FeeModule {}
