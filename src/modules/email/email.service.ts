import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { EmailRepository } from './email.repository';

@Injectable()
export class EmailService extends AbstractService<MODEL_NAME.EMAIL, EmailRepository> {
  constructor(repository: EmailRepository) {
    super(repository);
  }

  async sendEmail() {}
}
