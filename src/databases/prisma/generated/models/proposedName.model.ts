import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { company, companySuffix, task } from './';

export class proposedName {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsInt()
  companySuffixId!: number;

  @IsOptional()
  @IsInt()
  taskId?: number;

  @IsOptional()
  @IsInt()
  companyId?: number;

  @IsDefined()
  @IsBoolean()
  isApprove!: boolean;

  @IsDefined()
  @IsBoolean()
  isSentAgent!: boolean;

  @IsDefined()
  @IsBoolean()
  isSentCustomer!: boolean;

  @IsDefined()
  @IsBoolean()
  isConfirmed!: boolean;

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
  company?: company;

  @IsOptional()
  companySuffix?: companySuffix;

  @IsOptional()
  task?: task;
}
