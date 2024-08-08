import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { company, companyMember, companyPosition, task } from './';

export class companyOwnership {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsOptional()
  @IsInt()
  no?: number;

  @IsDefined()
  @IsInt()
  companyId!: number;

  @IsDefined()
  @IsInt()
  companyMemberId!: number;

  @IsOptional()
  @IsInt()
  companyPositionId?: number;

  @IsOptional()
  @IsInt()
  corporationCompanyMemberId?: number;

  @IsDefined()
  value!: number;

  @IsDefined()
  @IsBoolean()
  isValid!: boolean;

  @IsDefined()
  @IsBoolean()
  isApproved!: boolean;

  @IsOptional()
  @IsInt()
  issuedFileId?: number;

  @IsOptional()
  @IsDate()
  issuedDated?: Date;

  @IsOptional()
  @IsDate()
  expiredDated?: Date;

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
  company!: company;

  @IsDefined()
  companyMember!: companyMember;

  @IsOptional()
  corporationCompanyMember?: companyMember;

  @IsOptional()
  companyPosition?: companyPosition;

  @IsOptional()
  task?: task;
}
