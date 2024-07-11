import { AbstractService } from '@abstracts';
import { Injectable } from '@nestjs/common';
import { TokenRepository } from './token.repository';
import { MODEL_NAME } from '@utilities';

@Injectable()
export class TokenService extends AbstractService<
  MODEL_NAME.TOKEN,
  TokenRepository
> {
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
