import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { businessActivity, businessActivityIndustryClass, country, customer } from './';

export class businessActivityIndustry {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsInt()
  country_id?: number;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsOptional()
  parentIds?: Prisma.JsonValue;

  @IsOptional()
  @IsInt()
  businessActivityIndustryClassId?: number;

  @IsOptional()
  @IsString()
  sicCode?: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsOptional()
  country?: country;

  @IsDefined()
  businessActivities!: businessActivity[];

  @IsOptional()
  businessActivityIndustryClass?: businessActivityIndustryClass;

  @IsDefined()
  customers!: customer[];
}
