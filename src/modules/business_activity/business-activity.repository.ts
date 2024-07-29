import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';
import { E_BUSINESS_ACTIVITY, MODEL_NAME } from '@utilities';

import { PrismaService } from '@databases/prisma.service';

@Injectable()
export class BusinessActivityRepository extends AbstractRepository<MODEL_NAME.BUSINESS_ACTIVITY> {
  attributes = E_BUSINESS_ACTIVITY.ATTRIBUTE;
  relations = E_BUSINESS_ACTIVITY.RELATION;
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
