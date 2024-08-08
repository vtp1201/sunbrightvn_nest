import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { bank, bankingProcess } from './';

export class bankBranch {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsInt()
  bankId?: number;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsOptional()
  bank?: bank;

  @IsDefined()
  bankingProcesses!: bankingProcess[];
}
