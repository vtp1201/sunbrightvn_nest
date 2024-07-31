import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '@modules/auth/services/auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.authService.getAuthenticatedUser(username, password);
    return user;
  }
}
