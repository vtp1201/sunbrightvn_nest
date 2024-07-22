import { Module } from '@nestjs/common';

import { BODController, CSController } from './controllers';

@Module({
  imports: [],
  controllers: [BODController, CSController],
})
export class StatisticModule {}
