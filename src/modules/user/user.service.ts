import { AbstractService } from 'src/abstracts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends AbstractService {
  constructor() {
    super();
  }
}
