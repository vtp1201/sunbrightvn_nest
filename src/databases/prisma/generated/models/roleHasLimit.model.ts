import { IsDefined, IsInt } from 'class-validator';

import './';

export class roleHasLimit {
  @IsDefined()
  @IsInt()
  roleId!: number;

  @IsDefined()
  @IsInt()
  limitId!: number;
}
