import { AbstractRepository } from '@abstracts';
import { PrismaService } from '@databases/prisma.service';
import { Injectable } from '@nestjs/common';
import { MODEL_NAME, E_WEBSITE } from '@utilities';

@Injectable()
export class WebsiteRepository extends AbstractRepository<MODEL_NAME.WEBSITE> {
  attributes = E_WEBSITE.ATTRIBUTE;
  relations = E_WEBSITE.RELATION;
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
