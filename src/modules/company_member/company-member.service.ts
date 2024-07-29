import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { CompanyMemberRepository } from './company-member.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class CompanyMemberService extends AbstractService<
  MODEL_NAME.COMPANY_MEMBER,
  CompanyMemberRepository
> {
  constructor(repository: CompanyMemberRepository) {
    super(repository);
  }
}
