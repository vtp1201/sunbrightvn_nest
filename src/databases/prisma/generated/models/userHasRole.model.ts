import { IsDefined, IsInt } from 'class-validator';

import './';

export class userHasRole {
  @IsDefined()
  @IsInt()
  userId!: number;

  @IsDefined()
  @IsInt()
  roleId!: number;
}
