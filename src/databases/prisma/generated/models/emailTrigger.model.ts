import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { emailTriggerHasProcess, processStep } from './';

export class emailTrigger {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  type?: number;

  @IsOptional()
  serviceTypeIds?: Prisma.JsonValue;

  @IsOptional()
  @IsInt()
  processStepId?: number;

  @IsDefined()
  @IsBoolean()
  isRemindAgent!: boolean;

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
  processStep?: processStep;

  @IsDefined()
  emailTriggerHasProcesses!: emailTriggerHasProcess[];
}
