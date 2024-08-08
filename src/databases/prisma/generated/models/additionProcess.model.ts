import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { billing, process, task, taskHasAgent } from './';

export class additionProcess {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsOptional()
  @IsString()
  trackingLink?: string;

  @IsOptional()
  @IsString()
  trackingCode?: string;

  @IsOptional()
  serviceTypeIds?: Prisma.JsonValue;

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
  task!: task;

  @IsDefined()
  processes!: process[];

  @IsDefined()
  billings!: billing[];

  @IsDefined()
  taskHasAgents!: taskHasAgent[];
}
