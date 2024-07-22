import { Module } from '@nestjs/common';

import { StaticDataController } from './controller';

@Module({
  imports: [],
  controllers: [StaticDataController],
})
export class GleadsSGModule {}
