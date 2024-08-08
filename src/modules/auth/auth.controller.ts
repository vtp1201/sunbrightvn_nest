import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import {
  // ApiBadRequestResponse,
  // ApiBody,
  // ApiConflictResponse,
  // ApiCreatedResponse,
  // ApiOperation,
  // ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { LocalAuthGuard } from '../../common/guards/local.guard';
import { AuthService } from './services/auth.service';

import { RequestWithUser } from '@types';

import { ROUTES } from '@utilities';

const { ROUTE, TAG } = ROUTES.AUTH;
@Controller()
@ApiTags(TAG)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('sign-up')
  // async signUp(@Body() sign_up_dto: SignUpDto) {
  //   // return await this.authService.signUp(sign_up_dto);
  // }

  @Post(ROUTE.BASE)
  @UseGuards(LocalAuthGuard)
  async login(@Req() request: RequestWithUser) {
    console.log(request);
    request;
    // return await this.authService.signIn(user._id.toString());
  }

  // @UseGuards(JwtRefreshTokenGuard)
  // @Post('refresh')
  // async refreshAccessToken(@Req() request: RequestWithUser) {
  //   const { user } = request;
  //   const access_token = this.authService.generateAccessToken({
  //     user_id: user._id.toString(),
  //   });
  //   return {
  //     access_token,
  //   };
  // }
}
