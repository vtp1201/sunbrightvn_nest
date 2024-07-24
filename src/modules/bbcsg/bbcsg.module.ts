import { Module } from '@nestjs/common';

import { BusinessActivityModule } from '@modules/business_activity/business-activity.module';
import { CountryModule } from '@modules/country/country.module';

import { BBCSGService } from './bbcsg.service';
import {
  BusinessActivityController,
  CompanyNameCheckController,
  StaticDataController,
} from './controllers';

@Module({
  imports: [BusinessActivityModule, CountryModule],
  controllers: [BusinessActivityController, CompanyNameCheckController, StaticDataController],
  providers: [BBCSGService],
})
export class BBCSGModule {}
