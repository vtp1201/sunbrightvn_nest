import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import {
  email,
  emailTemplateHasReceiver,
  emailTriggerHasProcess,
  emailType,
  processStep,
} from './';

export class emailTemplate {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  previewText?: string;

  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @IsInt()
  preTime?: number;

  @IsOptional()
  @IsInt()
  nextEmailTemplateId?: number;

  @IsOptional()
  @IsInt()
  processStepId?: number;

  @IsOptional()
  @IsInt()
  emailTypeId?: number;

  @IsOptional()
  @IsInt()
  maxTimeSend?: number;

  @IsDefined()
  @IsBoolean()
  isEmailRemind!: boolean;

  @IsOptional()
  dataViewTables?: Prisma.JsonValue;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  updatedTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  emails!: email[];

  @IsOptional()
  emailType?: emailType;

  @IsOptional()
  nextEmailTemplate?: emailTemplate;

  @IsDefined()
  otherEmailTemplates!: emailTemplate[];

  @IsOptional()
  processStep?: processStep;

  @IsDefined()
  emailTemplateHasReceivers!: emailTemplateHasReceiver[];

  @IsDefined()
  emailTriggerHasProcesses!: emailTriggerHasProcess[];
}
