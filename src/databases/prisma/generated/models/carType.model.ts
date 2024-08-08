import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { service } from './';

export class carType {
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
  services!: service[];
}
