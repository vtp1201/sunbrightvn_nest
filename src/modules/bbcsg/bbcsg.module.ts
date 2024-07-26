import { Module } from '@nestjs/common';

import { BusinessActivityModule } from '@modules/business_activity/business-activity.module';
import { CountryModule } from '@modules/country/country.module';

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
