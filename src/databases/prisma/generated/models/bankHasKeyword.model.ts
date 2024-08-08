import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { bank } from './';

export class bankHasKeyword {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  bankId!: number;

  @IsOptional()
  @IsString()
  keyword?: string;

  @IsOptional()
  bank?: bank;
}
