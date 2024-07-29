import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';
import { E_TOKEN, MODEL_NAME } from '@utilities';

import { PrismaService } from '@databases/prisma.service';

@Injectable()
export class TokenRepository extends AbstractRepository<MODEL_NAME.TOKEN> {
  attributes = E_TOKEN.ATTRIBUTE;
  relations = E_TOKEN.RELATION;
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
