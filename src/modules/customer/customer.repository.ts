import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class CustomerRepository extends AbstractRepository<MODEL_NAME.CUSTOMER> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }

  updateXeroContact({ id, xeroContactId }: { id: number; xeroContactId: string }) {
    return this.update({
      where: {
        id,
      },
      data: {
        xeroContactId,
      },
    });
  }
}
