import { AbstractService } from '@abstracts';
import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailRepository } from './email.repository';
import { MODEL_NAME } from '@utilities';

@Injectable()
export class EmailService extends AbstractService<
  MODEL_NAME.EMAIL,
  EmailRepository
> {
  constructor(repository: EmailRepository) {
    super(repository);
  }

  async sendEmail(a: any) {}
}
