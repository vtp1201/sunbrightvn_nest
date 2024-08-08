import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { agent, companyMember, fileTemplate, process } from './';

export class processLog {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  processId!: number;

  @IsDefined()
  @IsBoolean()
  isFinished!: boolean;

  @IsOptional()
  @IsDate()
  finishedTime?: Date;

  @IsDefined()
  @IsBoolean()
  isLogMail!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemind!: boolean;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  agentId?: number;

  @IsOptional()
  @IsInt()
  fileTemplateId?: number;

  @IsOptional()
  @IsInt()
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  belongToCompanyMemberId?: number;

  @IsOptional()
  @IsInt()
  emailTemplateId?: number;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

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
  belongToCompanyMember?: companyMember;

  @IsOptional()
  fileTemplate?: fileTemplate;

  @IsDefined()
  process!: process;
}
