import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { actionStepType, company, historyFile, task, user } from './';

export class historyLogCdc {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  userId!: number;

  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsOptional()
  @IsInt()
  companyId?: number;

  @IsOptional()
  @IsInt()
  actionStepTypeId?: number;

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
  historyFiles!: historyFile[];

  @IsOptional()
  actionStepType?: actionStepType;

  @IsOptional()
  company?: company;

  @IsDefined()
  task!: task;

  @IsDefined()
  user!: user;
}
