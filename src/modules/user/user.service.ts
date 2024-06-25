import { AbstractService } from '@abstract';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends AbstractService {
  constructor() {
    super();
  }
}
