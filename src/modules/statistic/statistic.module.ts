import { Module } from '@nestjs/common';

import { BODController, CSController } from './controller';

@Module({
  imports: [],
  controllers: [BODController, CSController],
})
export class StatisticModule {}
