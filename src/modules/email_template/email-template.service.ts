import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { EmailTemplateRepository } from './email-template.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class EmailTemplateService extends AbstractService<
  MODEL_NAME.EMAIL_TEMPLATE,
  EmailTemplateRepository
> {
  constructor(repository: EmailTemplateRepository) {
    super(repository);
  }
}
