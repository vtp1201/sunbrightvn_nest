import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { api, apiGroup } from './';

export class apiHasGroup {
  @IsDefined()
  @IsInt()
  apiId!: number;

  @IsDefined()
  @IsInt()
  apiGroupId!: number;

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
  api!: api;

  @IsDefined()
  apiGroup!: apiGroup;
}
