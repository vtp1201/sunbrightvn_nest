import { UserService } from '@modules/user/user.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SHA256 } from 'crypto-js';
import { TokenService } from './token.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async getAuthenticatedUser(username: string, password: string) {
    try {
      const user = await this.userService.findFirst({
        where: {
          [this.userService.repository.attributes.username]: username,
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException('');
    }
  }

  async verifyAccessToken(accessToken: string) {
    try {
      const token = await this.tokenService.findFirst({
        select: {
          id: true,
          scope: true,
          userId: true,
          accessToken: true,
          accessTokenExp: true,
          refreshToken: true,
          refreshTokenExp: true,
        },
        where: {
          accessToken,
          accessTokenExp: {
            gte: Math.floor(Date.now() / 1000),
          },
        },
      });

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
    token = null,
  ) {
    const passport = {
      user: {
        id: user.id,
        username: user.username,
        status: user.status,
        createdTime: user.createdTime,
        personId: user.personId,
        customerId: user.customerId,
      },
      token,
    };

    if (token) {
      passport.token = {
        id: token.id,
        scope: token.scope,
        access_token: token.access_token,
        access_token_exp: token.access_token_exp,
        access_token_iat: token.access_token_iat,
        refresh_token: token.refresh_token,
        refresh_token_exp: token.refresh_token_exp,
        refresh_token_iat: token.refresh_token_iat,
      };
    }
  }
}
