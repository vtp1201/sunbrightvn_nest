import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class BankingProcessRepository extends AbstractRepository<MODEL_NAME.BANKING_PROCESS> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
