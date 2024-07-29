import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { PrismaService } from '@databases/prisma.service';

@Injectable()
export class AnswerRepository extends AbstractRepository<MODEL_NAME.ANSWER> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
