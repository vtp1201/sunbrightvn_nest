import { BadRequestException, Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { ERRORS_DICTIONARY, MODEL_NAME, ROLE_STATUS } from '@utilities';

@Injectable()
export class UserRepository extends AbstractRepository<MODEL_NAME.USER> {
  constructor(private prismaService: PrismaService) {
    super(prismaService);
  }
  async getUserToGeneratePassport(id?: number, username?: string) {
    if (!id && !username)
      throw new BadRequestException(ERRORS_DICTIONARY.VALIDATION_PROPERTY_VALID);
    const query = id
      ? {
          id,
        }
      : { username };
    return await this.findFirstOrThrow({
      select: {
        id: true,
        username: true,
        password: true,
        passwordSalt: true,
        isTwoFactorAuthentication: true,
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
          where: {
            status: ROLE_STATUS.ACTIVE,
          },
        },
        customer: {
          select: {
            email: true,
          },
        },
      },
      where: query,
    });
  }

  async getUsersByRoleIds(roleIds: number[]) {
    const user = await this.prismaService.user.findFirst({
      include: {
        roles: {
          where: {
            id: {
              in: roleIds,
            },
          },
        },
      },
    });
    return user;
  }
}
