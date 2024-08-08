import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import './';

export class rate {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  rateSourceId!: number;

  @IsOptional()
  @IsString()
  ip?: string;

  @IsDefined()
  @IsInt()
  score!: number;

  @IsOptional()
  @IsString()
  email?: string;

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
}
