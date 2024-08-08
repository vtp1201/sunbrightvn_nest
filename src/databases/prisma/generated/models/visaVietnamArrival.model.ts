import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { country } from './';

export class visaVietnamArrival {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsInt()
  dayFree?: number;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsOptional()
  country?: country;
}
