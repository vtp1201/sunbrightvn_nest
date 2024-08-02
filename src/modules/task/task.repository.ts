import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class TaskRepository extends AbstractRepository<MODEL_NAME.TASK> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
