import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local.guard';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { API_TAGS, ROUTE_AUTH } from '@utilities';
import { RequestWithUser } from '@types';

@Controller(ROUTE_AUTH.LOGIN)
@ApiTags(API_TAGS.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('sign-up')
  // async signUp(@Body() sign_up_dto: SignUpDto) {
  //   // return await this.authService.signUp(sign_up_dto);
  // }

  @UseGuards(LocalAuthGuard)
  @Post()
  async signIn(@Req() request: RequestWithUser) {
    const { user } = request;
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
