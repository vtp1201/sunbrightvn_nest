import { IsDefined, IsInt } from 'class-validator';

import './';

export class groupHasUser {
  @IsDefined()
  @IsInt()
  userId!: number;

  @IsDefined()
  @IsInt()
  groupId!: number;
}
