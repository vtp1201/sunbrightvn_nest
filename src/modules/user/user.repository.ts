import { AbstractRepository } from '@abstracts';
import { PrismaService } from '@databases/prisma.service';
import { Injectable } from '@nestjs/common';
import { MODEL_NAME, E_USER } from '@utilities';

@Injectable()
export class UserRepository extends AbstractRepository<MODEL_NAME.USER> {
  attributes = E_USER.ATTRIBUTE;
  relations = E_USER.RELATION;
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
  async test() {
    const user = await this.findFirst({
      select: {
        username: true,
        roles: true,
      },
      where: {
        id: 9,
      },
    });
    return 'test';
  }
}
