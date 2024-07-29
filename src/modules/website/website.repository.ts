import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';
import { E_WEBSITE, MODEL_NAME } from '@utilities';

import { PrismaService } from '@databases/prisma.service';

@Injectable()
export class WebsiteRepository extends AbstractRepository<MODEL_NAME.WEBSITE> {
  attributes = E_WEBSITE.ATTRIBUTE;
  relations = E_WEBSITE.RELATION;
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
