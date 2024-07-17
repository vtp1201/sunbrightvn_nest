import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { RequestWithUser } from '@types';
import { API_TAGS, ROUTES } from '@utilities';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local.guard';

@Controller()
@ApiTags(API_TAGS.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('sign-up')
  // async signUp(@Body() sign_up_dto: SignUpDto) {
  //   // return await this.authService.signUp(sign_up_dto);
  // }

  @Post(ROUTES.AUTH.LOGIN)
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
