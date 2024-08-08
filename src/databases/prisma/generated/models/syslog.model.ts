import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { apiMethod, country, syslogType, user } from './';

export class syslog {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  apiUrl!: string;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsInt()
  syslogTypeId?: number;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  bodyReq?: Prisma.JsonValue;

  @IsDefined()
  @IsInt()
  apiMethodId!: number;

  @IsOptional()
  @IsString()
  relevantLink?: string;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsInt()
  customerId?: number;

  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsOptional()
  @IsInt()
  taskId?: number;

  @IsOptional()
  @IsInt()
  status?: number;

  @IsOptional()
  @IsString()
  host?: string;

  @IsOptional()
  @IsString()
  referer?: string;

  @IsOptional()
  @IsString()
  userAgent?: string;

  @IsOptional()
  @IsString()
  method?: string;

  @IsOptional()
  @IsInt()
  tokenId?: number;

  @IsDefined()
  @IsBoolean()
  isError!: boolean;

  @IsDefined()
  @IsBoolean()
  isUnExpectedError!: boolean;

  @IsOptional()
  @IsString()
  errMessage?: string;

  @IsOptional()
  @IsString()
  errStackTrace?: string;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsOptional()
  apiMethod?: apiMethod;

  @IsOptional()
  country?: country;

  @IsOptional()
  syslogType?: syslogType;

  @IsOptional()
  user?: user;
}
