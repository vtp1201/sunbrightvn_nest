import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { limitType, limitValue, permission, permissionGroup, role } from './';

export class limit {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsInt()
  limitTypeId!: number;

  @IsDefined()
  @IsInt()
  permissionGroupId!: number;

  @IsDefined()
  @IsInt()
  permissionId!: number;

  @IsOptional()
  @IsString()
  model?: string;

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
  limitType!: limitType;

  @IsOptional()
  permissionGroup?: permissionGroup;

  @IsOptional()
  permission?: permission;

  @IsDefined()
  limitValues!: limitValue[];

  @IsDefined()
  roles!: role[];
}
