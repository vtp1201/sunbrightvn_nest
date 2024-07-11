import { UserService } from '@modules/user/user.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MD5, SHA256 } from 'crypto-js';
import { TokenService } from './token.service';
import { Prisma } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private PASSWORD_SALT_STATIC: string;
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
    configService: ConfigService,
  ) {
    this.PASSWORD_SALT_STATIC = configService.get('PASSWORD_SALT_STATIC');
  }

  async getAuthenticatedUser(username: string, password: string) {
    try {
      const user = await this.userService.findFirstOrThrow({
        where: {
          username: username.trim(),
        },
        include: {
          roles: {
            include: {
              permissions: true,
            },
            where: {
              status: 1,
            },
          },
          customer: true,
        },
      });

      if (user.status !== 1) throw new BadRequestException('');
      if (
        !this.comparePassword({
          passwordHashed: user.password,
          passwordSalt: user.passwordSalt,
          password,
        })
      )
        throw new BadRequestException('');

      if (user.isTwoFactorAuthentication) {
      }
    } catch (error) {
      throw new BadRequestException('');
    }
  }

  comparePassword({
    passwordHashed,
    passwordSalt,
    password,
  }: {
    passwordHashed: string;
    passwordSalt: string;
    password: string;
  }) {
    return (
      SHA256(
        this.PASSWORD_SALT_STATIC + MD5(password) + passwordSalt,
      ).toString() == passwordHashed
    );
  }

  async verifyAccessToken(accessToken: string) {
    try {
      const token = await this.tokenService.getTokenValidFromAccessToken(
        accessToken,
      );

      if (!token) {
        throw new BadRequestException('');
      }

      const user = await this.userService.repository.getUserToGeneratePassport(
        token.userId,
      );

      if (!user) {
        throw new BadRequestException('');
      }

      return this.generatePassport(user);
    } catch (error) {
      throw new BadRequestException('');
    }
  }

  generatePassport(
    user: Prisma.PromiseReturnType<
      typeof this.userService.repository.getUserToGeneratePassport
    >,
    token: null | Prisma.PromiseReturnType<
      typeof this.tokenService.getTokenValidFromAccessToken
    > = null,
  ) {
    const roles: {
      id: number;
      name: string;
      left: number;
      right: number;
      parentId: number;
    }[] = [];
    const permissions = [];
    const limits = [];

    for (const keyRole in user.roles) {
      roles.push({
        id: user.roles[keyRole].id,
        name: user.roles[keyRole].name,
        left: user.roles[keyRole].left,
        right: user.roles[keyRole].right,
        parentId: user.roles[keyRole].parentId,
      });

      for (const keyPermission in user.roles[keyRole].permissions) {
        if (user.roles[keyRole].permissions[keyPermission].id) {
          permissions[user.roles[keyRole].permissions[keyPermission].id] = {
            id: user.roles[keyRole].permissions[keyPermission].id,
            value: user.roles[keyRole].permissions[keyPermission].value,
            name: user.roles[keyRole].permissions[keyPermission].name,
          };
        }
      }

      for (const keyPermission_1 in user.roles[keyRole].limits) {
        if (user.roles[keyRole].limits[keyPermission_1].id) {
          limits[user.roles[keyRole].limits[keyPermission_1].id] = {
            id: user.roles[keyRole].limits[keyPermission_1].id,
            name: user.roles[keyRole].limits[keyPermission_1].name,
            model: user.roles[keyRole].limits[keyPermission_1].model,
            limitTypeId:
              user.roles[keyRole].limits[keyPermission_1].limitTypeId,
            permissionId:
              user.roles[keyRole].limits[keyPermission_1].permissionId,
            permissionGroupId:
              user.roles[keyRole].limits[keyPermission_1].permissionGroupId,
            permission: user.roles[keyRole].limits[keyPermission_1].permission,
            permissionGroup:
              user.roles[keyRole].limits[keyPermission_1].permissionGroup,
            limitValues:
              user.roles[keyRole].limits[keyPermission_1].limitValues,
          };
        }
      }
    }

    return {
      user: {
        id: user.id,
        username: user.username,
        status: user.status,
        createdTime: user.createdTime,
        personId: user.personId,
        customerId: user.customerId,
      },
      token: token
        ? {
            id: token.id,
            scope: token.scope,
            accessToken: token.accessToken,
            accessTokenExp: token.accessTokenExp,
            refreshToken: token.refreshToken,
            refreshTokenExp: token.refreshTokenExp,
          }
        : null,
      roles,
      permissions,
      limits,
    };
  }
}
