import { IsDefined, IsInt } from 'class-validator';

import './';

export class roleHasPermission {
  @IsDefined()
  @IsInt()
  roleId!: number;

  @IsDefined()
  @IsInt()
  permissionId!: number;
}
