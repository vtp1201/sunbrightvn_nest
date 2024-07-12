import { AbstractRepository } from '@abstracts';
import { PrismaService } from '@databases/prisma.service';
import { Injectable } from '@nestjs/common';
import { MODEL_NAME, E_EMAIL } from '@utilities';

@Injectable()
export class EmailRepository extends AbstractRepository<MODEL_NAME.EMAIL> {
  attributes = E_EMAIL.ATTRIBUTE;
  relations = E_EMAIL.RELATION;
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
