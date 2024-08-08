import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { businessActivityIndustry, company, companyMember, country } from './';

export class businessActivity {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsString()
  sicCode?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  businessActivityIndustryId?: number;

  @IsOptional()
  labelIds?: Prisma.JsonValue;

  @IsOptional()
  @IsBoolean()
  isCommon?: boolean;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsOptional()
  businessActivityIndustry?: businessActivityIndustry;

  @IsOptional()
  country?: country;

  @IsDefined()
  companies!: company[];

  @IsDefined()
  companyMembers!: companyMember[];
}
