import { Module } from '@nestjs/common';

import { CompanyMemberRepository } from './company-member.repository';
import { CompanyMemberService } from './company-member.service';

@Module({
  imports: [],
  providers: [CompanyMemberService, CompanyMemberRepository],
  exports: [CompanyMemberService],
})
export class CompanyMemberModule {}
