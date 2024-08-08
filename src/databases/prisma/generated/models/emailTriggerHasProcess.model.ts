import { IsDate, IsDefined, IsInt } from 'class-validator';

import { emailTemplate, emailTrigger, process } from './';

export class emailTriggerHasProcess {
  @IsDefined()
  @IsInt()
  emailTriggerId!: number;

  @IsDefined()
  @IsInt()
  processId!: number;

  @IsDefined()
  @IsInt()
  emailTemplateId!: number;

  @IsDefined()
  @IsInt()
  isRemind!: number;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  updatedTime!: Date;

  @IsDefined()
  emailTemplate!: emailTemplate;

  @IsDefined()
  emailTrigger!: emailTrigger;

  @IsDefined()
  process!: process;
}
