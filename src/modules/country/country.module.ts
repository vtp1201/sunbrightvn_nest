import { Module } from '@nestjs/common';

import { CountryRepository } from './country.repository';
import { CountryService } from './country.service';

@Module({
  imports: [],
  providers: [CountryService, CountryRepository],
  exports: [CountryService],
})
export class CountryModule {}
