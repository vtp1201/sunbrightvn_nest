import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class WebsiteRepository extends AbstractRepository<MODEL_NAME.WEBSITE> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }

  getAllWebsiteWithAllRelations() {
    return this.findMany({
      include: {
        currency: true,
      },
    });
  }
}
