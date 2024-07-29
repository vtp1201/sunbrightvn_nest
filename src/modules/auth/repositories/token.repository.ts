import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { E_TOKEN, MODEL_NAME } from '@utilities';

@Injectable()
export class TokenRepository extends AbstractRepository<MODEL_NAME.TOKEN> {
  attributes = E_TOKEN.ATTRIBUTE;
  relations = E_TOKEN.RELATION;
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
