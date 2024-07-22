import { Module } from '@nestjs/common';

import { BBCSGService } from './bbcsg.service';
import {
  BusinessActivityController,
  CompanyNameCheckController,
  StaticDataController,
} from './controllers';

@Module({
  imports: [],
  controllers: [BusinessActivityController, CompanyNameCheckController, StaticDataController],
  providers: [BBCSGService],
})
export class BBCSGModule {}
