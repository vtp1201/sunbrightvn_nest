import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { actionStepType, bank, country, processStep, serviceType } from './';

export class actionProcessStep {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  processStepId!: number;

  @IsDefined()
  @IsInt()
  nextProcessStepId!: number;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsInt()
  bankId?: number;

  @IsOptional()
  @IsInt()
  priority?: number;

  @IsOptional()
  @IsInt()
  serviceTypeId?: number;

  @IsDefined()
  @IsInt()
  actionStepTypeId!: number;

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
  processStepChildren!: processStep;

  @IsDefined()
  processStepParent!: processStep;

  @IsOptional()
  country?: country;

  @IsOptional()
  bank?: bank;

  @IsOptional()
  serviceType?: serviceType;

  @IsDefined()
  actionStepType!: actionStepType;
}
