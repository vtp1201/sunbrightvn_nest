import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { country, entityType, service } from './';

export class countryHasService {
  @IsDefined()
  @IsInt()
  countryId!: number;

  @IsDefined()
  @IsInt()
  serviceId!: number;

  @IsOptional()
  @IsInt()
  entityTypeId?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  dataConfig?: Prisma.JsonValue;

  @IsDefined()
  @IsBoolean()
  isCalendar!: boolean;

  @IsDefined()
  @IsInt()
  yearCurrent!: number;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  country!: country;

  @IsDefined()
  service!: service;

  @IsOptional()
  entityType?: entityType;
}
