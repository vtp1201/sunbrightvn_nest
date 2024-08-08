import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { feeType, service } from './';

export class fee {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  serviceId?: number;

  @IsDefined()
  @IsInt()
  feeTypeId!: number;

  @IsOptional()
  value?: number;

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
  feeType!: feeType;

  @IsOptional()
  service?: service;
}
