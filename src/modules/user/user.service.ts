import { AbstractService } from '@abstracts';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { MODEL_NAME } from '@utilities';

@Injectable()
export class UserService extends AbstractService<
  MODEL_NAME.USER,
  UserRepository
> {
  constructor(userRepository: UserRepository) {
    super(userRepository);
  }

  async getUserByUsername(username: string) {
    try {
      const user = await this.findFirst({
        where: {
          [this.repository.attributes.username]: username,
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
