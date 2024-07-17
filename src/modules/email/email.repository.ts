import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';
import { PrismaService } from '@databases/prisma.service';
import { E_EMAIL, MODEL_NAME } from '@utilities';

@Injectable()
export class EmailRepository extends AbstractRepository<MODEL_NAME.EMAIL> {
  attributes = E_EMAIL.ATTRIBUTE;
  relations = E_EMAIL.RELATION;
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
