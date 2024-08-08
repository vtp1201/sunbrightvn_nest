import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { api, apiGroup, apiStatus, file } from './';

export class apiExample {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  apiId!: number;

  @IsDefined()
  @IsInt()
  apiStatusId!: number;

  @IsOptional()
  @IsInt()
  apiGroupId?: number;

  @IsOptional()
  body?: Prisma.JsonValue;

  @IsOptional()
  param?: Prisma.JsonValue;

  @IsOptional()
  query?: Prisma.JsonValue;

  @IsOptional()
  response?: Prisma.JsonValue;

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
  apiStatus!: apiStatus;

  @IsDefined()
  api!: api;

  @IsOptional()
  apiGroup?: apiGroup;

  @IsDefined()
  files!: file[];
}
