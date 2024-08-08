import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { entityType, option } from './';

export class toolBusinessEntity {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  optionId!: number;

  @IsDefined()
  @IsInt()
  entityTypeId!: number;

  @IsOptional()
  @IsInt()
  score?: number;

  @IsDefined()
  @IsBoolean()
  isReject!: boolean;

  @IsDefined()
  @IsBoolean()
  isReset!: boolean;

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
  options!: option;

  @IsDefined()
  entityType!: entityType;
}
