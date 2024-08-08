import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { limit } from './';

export class limitValue {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  limitId!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

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
  limit!: limit;
}
