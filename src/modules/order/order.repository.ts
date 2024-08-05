import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class OrderRepository extends AbstractRepository<MODEL_NAME.ORDER> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
