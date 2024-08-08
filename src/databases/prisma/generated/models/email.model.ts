import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { agent, company, companyMember, emailTemplate, process } from './';

export class email {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  emailTemplateId?: number;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsInt()
  agentId?: number;

  @IsOptional()
  @IsInt()
  processId?: number;

  @IsOptional()
  @IsInt()
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  companyId?: number;

  @IsOptional()
  @IsInt()
  order?: number;

  @IsOptional()
  timeToSend?: bigint;

  @IsDefined()
  @IsBoolean()
  isCompleted!: boolean;

  @IsDefined()
  @IsBoolean()
  isError!: boolean;

  @IsDefined()
  @IsBoolean()
  isRunning!: boolean;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  emailFrom?: string;

  @IsOptional()
  @IsString()
  emailTo?: string;

  @IsOptional()
  @IsString()
  emailCc?: string;

  @IsOptional()
  @IsString()
  attachments?: string;

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

  @IsOptional()
  agent?: agent;

  @IsOptional()
  companyMember?: companyMember;

  @IsOptional()
  emailTemplate?: emailTemplate;

  @IsOptional()
  process?: process;

  @IsOptional()
  company?: company;
}
