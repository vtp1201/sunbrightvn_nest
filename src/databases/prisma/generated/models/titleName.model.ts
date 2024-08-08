import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { customer, person } from './';

export class titleName {
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
  customers!: customer[];

  @IsDefined()
  persons!: person[];
}
