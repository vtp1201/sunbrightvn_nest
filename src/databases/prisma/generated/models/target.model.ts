import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { country } from './';

export class target {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  countryId!: number;

  @IsOptional()
  @IsInt()
  value?: number;

  @IsDefined()
  @IsInt()
  targetTypeId!: number;

  @IsOptional()
  @IsDate()
  dateOfTarget?: Date;

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
  country!: country;
}
