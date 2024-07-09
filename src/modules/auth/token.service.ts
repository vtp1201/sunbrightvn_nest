import { AbstractService } from '@abstracts';
import { Injectable } from '@nestjs/common';
import { TokenRepository } from './token.repository';
import { MODEL_NAME } from '@utilities';

@Injectable()
export class TokenService extends AbstractService<
  MODEL_NAME.TOKEN,
  TokenRepository
> {
  constructor(repository: TokenRepository) {
    super(repository);
  }
}
