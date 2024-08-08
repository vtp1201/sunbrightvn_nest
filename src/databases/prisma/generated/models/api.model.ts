import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { Prisma } from '@prisma/client';

import { apiExample, apiHasGroup, apiMethod } from './';

export class api {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  url!: string;

  @IsDefined()
  @IsInt()
  apiMethodId!: number;

  @IsOptional()
  note?: Prisma.JsonValue;

  @IsOptional()
  @IsBoolean()
  isRecaptcha?: boolean;

  @IsOptional()
  @IsBoolean()
  isAuthorization?: boolean;

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
  apiMethod!: apiMethod;

  @IsDefined()
  apiExamples!: apiExample[];

  @IsDefined()
  apiHasGroups!: apiHasGroup[];
}
