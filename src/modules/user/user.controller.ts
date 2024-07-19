import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AbstractController } from '@abstracts';
import { MODEL_NAME, ROUTES } from '@utilities';

import { UserRepository } from './user.repository';
import { UserService } from './user.service';

const { ROUTE, TAG } = ROUTES.USER;
@Controller()
@ApiTags(TAG)
export class UserController extends AbstractController<
  MODEL_NAME.USER,
  UserRepository,
  UserService
> {
  constructor(service: UserService) {
    super(service);
  }

  @Get(ROUTE.BASE)
  list() {
    return '';
  }

  @Post(ROUTE.BASE)
  createUser() {
    return '';
  }

  @Put(ROUTE.PASSWORD)
  updatePassword() {
    return '';
  }
}
