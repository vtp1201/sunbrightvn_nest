import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class QuestionRepository extends AbstractRepository<MODEL_NAME.QUESTION> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
