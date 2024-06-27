import { UserService } from '@modules/user/user.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SHA256 } from 'crypto-js';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async getAuthenticatedUser(username: string, password: string) {
    try {
      const user = await this.userService.findFirst({
        where: {
          [this.userService.repository.attributes.username]: username,
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException('');
    }
  }
}
