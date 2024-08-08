import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import './';

export class promotion {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  promotionCode!: string;

  @IsDefined()
  @IsInt()
  percent!: number;

  @IsDefined()
  @IsInt()
  amount!: number;

  @IsDefined()
  @IsBoolean()
  isUsed!: boolean;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;
}
