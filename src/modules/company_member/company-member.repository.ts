import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { PrismaService } from '@databases/prisma.service';

@Injectable()
export class CompanyMemberRepository extends AbstractRepository<MODEL_NAME.COMPANY_MEMBER> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
