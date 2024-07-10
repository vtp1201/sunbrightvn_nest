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
  async getUserToGeneratePassport(id: number) {
    return await this.findUniqueOrThrow({
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
            limits: {
              include: {
                limitType: true,
                permission: {
                  select: {
                    id: true,
                    value: true,
                    name: true,
                  },
                },
                permissionGroup: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
                limitValues: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
      where: {
        id,
      },
    });
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
        username: 'asd',
      },
      // include: {},
    });
    const customerId = user.customerId;
    return 'test';
  }
}
