import { AbstractService } from '@abstracts';
import { Injectable } from '@nestjs/common';
import { TokenRepository } from './token.repository';
import { MODEL_NAME } from '@utilities';
import { MD5 } from 'crypto-js';
// import jwt from 'jwt';

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

  generateToken() {
    const accessToken = MD5(
      Math.random().toString(36).substring(2, 20),
    ).toString();
    const refreshToken = MD5(
      Math.random().toString(36).substring(2, 20),
    ).toString();
    const createTime = Math.floor(Date.now() / 1000);
    const accessTokenExp =
      createTime + parseInt(process.env.JWT_ACCESS_TOKEN_TIME_TO_LIVE);
    const accessTokenIat = createTime;
    const refreshTokenExp =
      createTime + parseInt(process.env.JWT_REFRESH_TOKEN_TIME_TO_LIVE);
    const refreshTokenIat = createTime;
    const jwt_accessToken = jwt.sign(
      {
        iat: accessTokenIat,
        exp: accessTokenExp,
        data: accessToken,
      },
      process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
    );
    const jwt_refreshToken = jwt.sign(
      {
        iat: refreshTokenIat,
        exp: refreshTokenExp,
        data: refreshToken,
      },
      process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
    );

    const param = {
      token: {
        accessToken: accessToken,
        accessTokenExp: accessTokenExp,
        accessTokenIat: accessTokenIat,
        refreshToken: refreshToken,
        refreshTokenExp: refreshTokenExp,
        refreshTokenIat: refreshTokenIat,
      },
      jwtToken: {
        accessToken: jwt_accessToken,
        refreshToken: jwt_refreshToken,
        accessTokenExp: accessTokenExp,
        refreshTokenExp: refreshTokenExp,
      },
    };
    return param;
  }
}
