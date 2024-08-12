import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '@modules/auth/services/auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtVerify } from '@types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_ACCESS_TOKEN_SECRET_KEY'),
    });
  }

  async validate(payload: JwtVerify) {
    const data = await this.authService.verifyAccessToken(payload.data);
    return data;
  }
}
