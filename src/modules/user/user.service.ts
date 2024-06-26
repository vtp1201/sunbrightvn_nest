import { AbstractService } from 'src/abstracts';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { MODEL_NAME } from '@utilities';

@Injectable()
export class UserService extends AbstractService<
  UserRepository<MODEL_NAME.USER>
> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository);
  }
}
