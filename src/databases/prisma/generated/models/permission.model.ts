import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { limit, permissionGroup, role } from './';

export class permission {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  permissionGroupId!: number;

  @IsDefined()
  @IsString()
  value!: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  limits!: limit[];

  @IsDefined()
  permissionGroup!: permissionGroup;

  @IsDefined()
  roles!: role[];
}
