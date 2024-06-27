import { AbstractService } from 'src/abstracts';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { MODEL_NAME } from '@utilities';

@Injectable()
export class UserService extends AbstractService<MODEL_NAME.USER> {
  constructor(private readonly repository: UserRepository) {
    super(repository);
  }

  async getUserByUsername(username: string) {
    try {
      const user = await this.repository.findFirst({
        where: {
          [this.repository.attributes.username]: username,
        },
      });
      return user;
    } catch (error) {
      throw new BadRequestException('');
    }
  }
}
