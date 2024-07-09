import { UserService } from '@modules/user/user.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SHA256 } from 'crypto-js';
import { TokenService } from './token.service';

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

      const user = await this.userService.findFirst({
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
          id: token.id,
        },
      });
    } catch (error) {
      throw new BadRequestException('');
    }
  }

  generatePassport(user) {
    const passport = {
      user: {},
    };
  }
}
