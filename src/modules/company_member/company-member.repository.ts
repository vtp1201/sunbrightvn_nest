import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class CompanyMemberRepository extends AbstractRepository<MODEL_NAME.COMPANY_MEMBER> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
