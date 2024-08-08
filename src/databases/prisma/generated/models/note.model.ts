import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { company, companyMember, file, noteType, process, processStep, task, user } from './';

export class note {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  taskId?: number;

  @IsOptional()
  @IsInt()
  companyMemberId?: number;

  @IsDefined()
  @IsBoolean()
  isBelongToClient!: boolean;

  @IsDefined()
  @IsBoolean()
  isComplianceReject!: boolean;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsInt()
  noteTypeId?: number;

  @IsOptional()
  @IsInt()
  companyId?: number;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsOptional()
  @IsInt()
  noteStatusId?: number;

  @IsOptional()
  @IsInt()
  processStepId?: number;

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
  files!: file[];

  @IsOptional()
  company?: company;

  @IsOptional()
  companyMember?: companyMember;

  @IsOptional()
  noteType?: noteType;

  @IsOptional()
  task?: task;

  @IsOptional()
  user?: user;

  @IsOptional()
  processStep?: processStep;

  @IsDefined()
  processes!: process[];
}
