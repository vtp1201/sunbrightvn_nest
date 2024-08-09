import { Module } from '@nestjs/common';

import { CompanyRepository } from './company.repository';
import { CompanyService } from './company.service';

@Module({
  imports: [],
  controllers: [],
  providers: [CompanyService, CompanyRepository],
  exports: [CompanyService],
})
export class CompanyModule {}
