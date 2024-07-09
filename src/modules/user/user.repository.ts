import { AbstractRepository } from '@abstracts';
import { PrismaService } from '@databases/prisma.service';
import { Injectable } from '@nestjs/common';
import { MODEL_NAME, E_USER } from '@utilities';

@Injectable()
export class UserRepository extends AbstractRepository<MODEL_NAME.USER> {
  attributes = E_USER.ATTRIBUTE;
  relations = E_USER.RELATION;
  constructor(private prismaService: PrismaService) {
    super(prismaService);
  }
  async test() {
    const user = await this.prismaService.user.findFirst({
      select: {
        id: true,
        username: true,
        status: true,
        createdTime: true,
        personId: true,
        customerId: true,
        roles: {
          select: {
            id: true,
            name: true,
            left: true,
            right: true,
            parentId: true,
            permissions: {
              select: {
                id: true,
                value: true,
                name: true,
              },
            },
            limits: true,
          },
        },
      },
      where: {
        id: 98,
      },
      // include: {},
    });
    return 'test';
  }
}
