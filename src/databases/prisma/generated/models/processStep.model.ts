import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  actionProcessStep,
  emailTemplate,
  emailTrigger,
  note,
  notificationTemplate,
  process,
  processStepHasFileTemplate,
  processStepHasRole,
  processStepType,
} from './';

export class processStep {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  processStepTypeId!: number;

  @IsOptional()
  @IsInt()
  value?: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  left?: number;

  @IsOptional()
  @IsInt()
  right?: number;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsOptional()
  @IsString()
  descriptionDisplay?: string;

  @IsDefined()
  @IsBoolean()
  isGeneratedFile!: boolean;

  @IsDefined()
  @IsBoolean()
  isSendLinkSigned!: boolean;

  @IsOptional()
  @IsInt()
  order?: number;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  nextActionProcessSteps!: actionProcessStep[];

  @IsDefined()
  actionProcessSteps!: actionProcessStep[];

  @IsDefined()
  emailTemplates!: emailTemplate[];

  @IsDefined()
  emailTriggers!: emailTrigger[];

  @IsDefined()
  notes!: note[];

  @IsDefined()
  notificationTemplates!: notificationTemplate[];

  @IsDefined()
  processes!: process[];

  @IsDefined()
  processStepType!: processStepType;

  @IsOptional()
  parent?: processStep;

  @IsDefined()
  children!: processStep[];

  @IsDefined()
  processStepHasFileTemplates!: processStepHasFileTemplate[];

  @IsDefined()
  processStepHasRoles!: processStepHasRole[];
}
