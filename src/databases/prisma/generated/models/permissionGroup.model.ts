import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { limit, permission } from './';

export class permissionGroup {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  limits!: limit[];

  @IsDefined()
  permissions!: permission[];
}
