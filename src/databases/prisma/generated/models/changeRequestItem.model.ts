import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { changeRequest } from './';

export class changeRequestItem {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  changeRequestId!: number;

  @IsDefined()
  @IsString()
  model!: string;

  @IsDefined()
  @IsString()
  fieldName!: string;

  @IsDefined()
  @IsString()
  value!: string;

  @IsDefined()
  @IsBoolean()
  isFee!: boolean;

  @IsDefined()
  @IsString()
  dataType!: string;

  @IsOptional()
  @IsInt()
  targetId?: number;

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
  changeRequest!: changeRequest;
}
