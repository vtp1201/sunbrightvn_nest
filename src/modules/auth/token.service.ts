import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { TokenRepository } from './token.repository';

@Injectable()
export class TokenService extends AbstractService<MODEL_NAME.TOKEN, TokenRepository> {
  constructor(repository: TokenRepository) {
    super(repository);
  }

  async getTokenValidFromAccessToken(accessToken: string) {
    const token = await this.findFirst({
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
    return token;
  }
}
