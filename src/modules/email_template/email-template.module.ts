import { Module } from '@nestjs/common';

import { EmailTemplateRepository } from './email-template.repository';
import { EmailTemplateService } from './email-template.service';

@Module({
  imports: [],
  providers: [EmailTemplateService, EmailTemplateRepository],
  exports: [EmailTemplateService],
  controllers: [],
})
export class EmailTemplateModule {}
