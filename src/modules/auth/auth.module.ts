import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '@modules/user/user.module';

import { AuthController } from './auth.controller';
import { TokenRepository } from './repository/token.repository';
import { AuthService } from './service/auth.service';
import { TokenService } from './service/token.service';
import { JwtStrategy, LocalStrategy } from './strategies';

@Module({
  imports: [UserModule, PassportModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy, TokenService, TokenRepository],
  exports: [JwtStrategy],
})
export class AuthModule {}
