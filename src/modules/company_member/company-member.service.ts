import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { CompanyMemberRepository } from './company-member.repository';

@Injectable()
export class CompanyMemberService extends AbstractService<
  MODEL_NAME.COMPANY_MEMBER,
  CompanyMemberRepository
> {
  constructor(repository: CompanyMemberRepository) {
    super(repository);
  }
}
