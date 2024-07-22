import { Module } from '@nestjs/common';

import { StaticDataController } from './controllers';

@Module({
  imports: [],
  controllers: [StaticDataController],
})
export class GleadsSGModule {}
