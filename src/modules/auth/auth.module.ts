import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '@modules/user/user.module';

import { JwtStrategy, LocalStrategy } from '../../common/strategies';
import { AuthController } from './auth.controller';
import { TokenRepository } from './repositories/token.repository';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Module({
  imports: [UserModule, PassportModule, JwtModule, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
  providers: [AuthService, TokenService, TokenRepository],
  exports: [JwtStrategy],
})
export class AuthModule {}
