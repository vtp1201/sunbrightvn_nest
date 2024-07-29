import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { EmailRepository } from './email.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class EmailService extends AbstractService<MODEL_NAME.EMAIL, EmailRepository> {
  constructor(repository: EmailRepository) {
    super(repository);
  }

  async sendEmail() {}
}
