import { UserService } from '@modules/user/user.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async getAuthenticatedUser(username: string, password: string) {
    try {
    } catch (error) {
      throw new BadRequestException('');
    }
  }
}
