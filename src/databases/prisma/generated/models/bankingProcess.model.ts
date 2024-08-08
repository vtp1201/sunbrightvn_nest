import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { bank, bankBranch, country, process, proposedTime, task } from './';

export class bankingProcess {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  taskId?: number;

  @IsOptional()
  @IsInt()
  bankId?: number;

  @IsOptional()
  @IsInt()
  status?: number;

  @IsOptional()
  clientTime?: bigint;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsInt()
  bankBranchId?: number;

  @IsOptional()
  @IsString()
  contactPerson?: string;

  @IsOptional()
  @IsString()
  titleJob?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  applicationSetTrackingCode?: string;

  @IsOptional()
  @IsString()
  applicationFormTrackingCode?: string;

  @IsOptional()
  @IsString()
  urlVideo?: string;

  @IsOptional()
  @IsInt()
  phoneCountryId?: number;

  @IsOptional()
  @IsString()
  bankAddress?: string;

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

  @IsOptional()
  bank?: bank;

  @IsOptional()
  bankBranch?: bankBranch;

  @IsOptional()
  phoneCountry?: country;

  @IsOptional()
  task?: task;

  @IsDefined()
  processes!: process[];

  @IsDefined()
  proposedTimes!: proposedTime[];
}
