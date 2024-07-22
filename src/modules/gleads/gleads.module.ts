import { Module } from '@nestjs/common';

import { ContactFormController } from './controllers';

@Module({
  imports: [],
  controllers: [ContactFormController],
})
export class GleadsModule {}
