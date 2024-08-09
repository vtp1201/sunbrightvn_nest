import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class FileTemplateRepository extends AbstractRepository<MODEL_NAME.FILE_TEMPLATE> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
