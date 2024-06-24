import { PrismaService } from '@databases/prisma.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class VerifyAuthorizationMiddleware implements NestMiddleware {
  jwtAccessTokenSecretKey: string;
  constructor(
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {
    this.jwtAccessTokenSecretKey = this.configService.get(
      'JWT_ACCESS_TOKEN_SECRET_KEY',
    );
  }

  use(req: Request, res: Response, next: NextFunction) {
    const authorization = String(req.headers.authorization).split(' ');
    if (authorization[0] !== 'Bearer') {
      return res.send();
    }
    // const jwtPayload = this.prismaService.token.findFirst({
    //   where: {
    //     accessToken:
    //   }
    // })
  }
}
