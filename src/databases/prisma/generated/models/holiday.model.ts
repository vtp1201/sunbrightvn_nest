import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { country } from './';

export class holiday {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsInt()
  day!: number;

  @IsDefined()
  @IsInt()
  month!: number;

  @IsDefined()
  @IsInt()
  year!: number;

  @IsDefined()
  @IsDate()
  date!: Date;

  @IsDefined()
  @IsInt()
  countryId!: number;

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
  country?: country;
}
