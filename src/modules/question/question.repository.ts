import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { PrismaService } from '@databases/prisma.service';

@Injectable()
export class QuestionRepository extends AbstractRepository<MODEL_NAME.QUESTION> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
