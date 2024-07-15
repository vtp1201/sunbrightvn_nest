import { UserService } from '@modules/user/user.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MD5, SHA256 } from 'crypto-js';
import { randomBytes } from 'crypto';
import { TokenService } from './token.service';
import { Prisma } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import {
  USER_STATUS,
  ROLE_STATUS,
  KEY_SET_2FA,
  CONFIGURATION,
} from '@utilities';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private passwordSaltStatic: string;
  private JWTAccessTokenTimeToLive: number;
  private JWTRefreshTokenTimeToLive: number;
  private JWTAccessTokenSecretKey: string;
  private JWTRefreshTokenSecretKey: string;
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
    private readonly jwtService: JwtService,
    configService: ConfigService,
  ) {
    this.passwordSaltStatic = configService.get(
      CONFIGURATION.PASSWORD_SALT_STATIC,
    );
    this.JWTAccessTokenTimeToLive = configService.get<number>(
      CONFIGURATION.JWT_ACCESS_TOKEN_TIME_TO_LIVE,
    );
    this.JWTRefreshTokenTimeToLive = configService.get<number>(
      CONFIGURATION.JWT_REFRESH_TOKEN_TIME_TO_LIVE,
    );
    this.JWTAccessTokenSecretKey = configService.get<string>(
      CONFIGURATION.JWT_ACCESS_TOKEN_SECRET_KEY,
    );
    this.JWTRefreshTokenSecretKey = configService.get<string>(
      CONFIGURATION.JWT_REFRESH_TOKEN_SECRET_KEY,
    );
  }

  async getAuthenticatedUser(
    username: string,
    password: string,
    ipAddress: string | undefined = undefined,
  ) {
    try {
      const user = await this.userService.repository.getUserToGeneratePassport(
        undefined,
        username,
      );

      if (user.status !== USER_STATUS.ACTIVE) throw new BadRequestException('');
      if (
        !this.comparePassword({
          passwordHashed: user.password,
          passwordSalt: user.passwordSalt,
          password,
        })
      )
        throw new BadRequestException('');

      if (user.isTwoFactorAuthentication) {
        const generate2FA = this.generate2FAToken();
        const paramUpdate = {
          twoFactorToken: generate2FA.twoFactorToken,
          twoFactorTokenExp: generate2FA.twoFactorTokenExp,
        };
        await this.userService.update({
          where: { id: user.id },
          data: paramUpdate,
        });

        return {
          isTwoFactorAuthentication: 1,
          username: user.username?.trim(),
          email: user?.customer?.email,
        };
      }

      const generateToken = this.generateToken();
      await this.tokenService.create({
        data: {
          ...generateToken.token,
          userId: user.id,
          ipAddress,
        },
      });
      const passport = this.generatePassport(user);
      return {
        ...generateToken.jwtToken,
        ...passport,
      };
    } catch (error) {
      throw new BadRequestException('');
    }
  }

  generateToken() {
    const accessToken = MD5(
      Math.random().toString(36).substring(2, 20),
    ).toString();
    const refreshToken = MD5(
      Math.random().toString(36).substring(2, 20),
    ).toString();
    const createdTime = Math.floor(Date.now() / 1000);
    const accessTokenExp = createdTime + this.JWTAccessTokenTimeToLive;
    const refreshTokenExp = createdTime + this.JWTRefreshTokenTimeToLive;
    const jwtAccessToken = this.jwtService.sign(
      {
        iat: createdTime,
        exp: accessTokenExp,
        data: accessToken,
      },
      {
        secret: this.JWTAccessTokenSecretKey,
      },
    );
    const jwtRefreshToken = this.jwtService.sign(
      {
        iat: createdTime,
        exp: refreshTokenExp,
        data: refreshToken,
      },
      {
        secret: this.JWTRefreshTokenSecretKey,
      },
    );
    return {
      token: {
        accessToken: accessToken,
        accessTokenExp: accessTokenExp,
        accessTokenIat: createdTime,
        refreshToken: refreshToken,
        refreshTokenExp: refreshTokenExp,
        refreshTokenIat: createdTime,
      },
      jwtToken: {
        accessToken: jwtAccessToken,
        refreshToken: jwtRefreshToken,
        accessTokenExp: accessTokenExp,
        refreshTokenExp: refreshTokenExp,
      },
    };
  }

  generate2FAToken() {
    const bytes = randomBytes(20);
    const set = KEY_SET_2FA;
    let output = '';
    for (var i = 0, l = bytes.length; i < l; i++) {
      output += set[Math.floor((bytes[i] / 255.0) * (set.length - 1))];
    }
    const User2FAToken = output.substring(8, 14);
    const twoFactorTokenExp = Math.floor(Date.now() / 1000) + 300;
    const hashTwoFactorToken = SHA256(
      process.env.TWO_FACTOR_AUTH_SECRET_KEY +
        MD5(User2FAToken) +
        twoFactorTokenExp,
    ).toString();
    return {
      user2FAToken: User2FAToken,
      twoFactorToken: hashTwoFactorToken,
      twoFactorTokenExp: twoFactorTokenExp,
    };
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
        this.passwordSaltStatic + MD5(password) + passwordSalt,
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
