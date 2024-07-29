import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class NoteRepository extends AbstractRepository<MODEL_NAME.NOTE> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
