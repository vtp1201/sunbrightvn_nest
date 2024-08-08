import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class EmailTemplateRepository extends AbstractRepository<MODEL_NAME.EMAIL_TEMPLATE> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
