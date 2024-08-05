import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class ServiceRepository extends AbstractRepository<MODEL_NAME.SERVICE> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
