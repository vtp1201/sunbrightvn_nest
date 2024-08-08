import { IsBoolean, IsDate, IsDefined, IsInt } from 'class-validator';

import { bankingProcess } from './';

export class proposedTime {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  bankingProcessId!: number;

  @IsDefined()
  @IsInt()
  fromTime!: number;

  @IsDefined()
  @IsInt()
  toTime!: number;

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
  bankingProcess!: bankingProcess;
}
