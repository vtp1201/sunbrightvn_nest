import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class FileRepository extends AbstractRepository<MODEL_NAME.FILE> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
