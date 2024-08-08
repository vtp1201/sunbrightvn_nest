import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { Prisma } from '@prisma/client';

import {
  additionProcess,
  bankingProcess,
  email,
  emailTriggerHasProcess,
  note,
  person,
  processLog,
  processStep,
  task,
  user,
} from './';

export class process {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsDefined()
  @IsInt()
  processStepId!: number;

  @IsOptional()
  @IsInt()
  personId?: number;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsBoolean()
  isApproved?: boolean;

  @IsOptional()
  @IsBoolean()
  isRejected?: boolean;

  @IsOptional()
  @IsBoolean()
  isTerminated?: boolean;

  @IsOptional()
  @IsDate()
  finishedTime?: Date;

  @IsOptional()
  @IsDate()
  remindStartTime?: Date;

  @IsOptional()
  @IsInt()
  status?: number;

  @IsOptional()
  @IsInt()
  bankingProcessId?: number;

  @IsOptional()
  @IsInt()
  additionProcessId?: number;

  @IsOptional()
  @IsInt()
  priority?: number;

  @IsOptional()
  description?: Prisma.JsonValue;

  @IsOptional()
  parentId?: Prisma.JsonValue;

  @IsOptional()
  extraValue?: Prisma.JsonValue;

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

  @IsDefined()
  emailTriggerHasProcesses!: emailTriggerHasProcess[];

  @IsOptional()
  additionProcess?: additionProcess;

  @IsOptional()
  bankingProcess?: bankingProcess;

  @IsOptional()
  person?: person;

  @IsDefined()
  processStep!: processStep;

  @IsDefined()
  task!: task;

  @IsOptional()
  user?: user;

  @IsDefined()
  notes!: note[];

  @IsDefined()
  processLogs!: processLog[];
}
