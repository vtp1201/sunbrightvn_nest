import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';
import { E_COUNTRY, MODEL_NAME } from '@utilities';

import { PrismaService } from '@databases/prisma.service';

@Injectable()
export class CountryRepository extends AbstractRepository<MODEL_NAME.BUSINESS_ACTIVITY> {
  attributes = E_COUNTRY.ATTRIBUTE;
  relations = E_COUNTRY.RELATION;
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
