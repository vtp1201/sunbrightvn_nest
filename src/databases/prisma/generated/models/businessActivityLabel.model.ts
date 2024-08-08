import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import './';

export class businessActivityLabel {
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
}
