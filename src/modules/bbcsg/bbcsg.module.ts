import { Module } from '@nestjs/common';

import { BusinessActivityModule, CountryModule } from '@modules';

import {
  BusinessActivityController,
  CompanyNameCheckController,
  StaticDataController,
} from './controllers';
import { BusinessActivityBBCSGService } from './services';

@Module({
  imports: [BusinessActivityModule, CountryModule],
  controllers: [BusinessActivityController, CompanyNameCheckController, StaticDataController],
  providers: [BusinessActivityBBCSGService],
})
export class BBCSGModule {}
