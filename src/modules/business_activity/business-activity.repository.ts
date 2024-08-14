import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class BusinessActivityRepository extends AbstractRepository<MODEL_NAME.BUSINESS_ACTIVITY> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
