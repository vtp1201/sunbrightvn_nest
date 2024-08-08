import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import {
  changeRequestItem,
  changeRequestStatus,
  company,
  companyMember,
  companyPosition,
  file,
  task,
} from './';

export class changeRequest {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsDefined()
  @IsInt()
  companyId!: number;

  @IsDefined()
  @IsInt()
  changeRequestStatusId!: number;

  @IsOptional()
  @IsInt()
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  companyPositionId?: number;

  @IsOptional()
  @IsInt()
  toCompanyMemberId?: number;

  @IsOptional()
  @IsInt()
  toCompanyPositionId?: number;

  @IsOptional()
  @IsInt()
  changeRequestRelatedId?: number;

  @IsDefined()
  @IsBoolean()
  isApproved!: boolean;

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

  @IsOptional()
  companyMember?: companyMember;

  @IsOptional()
  companyPosition?: companyPosition;

  @IsOptional()
  toCompanyMember?: companyMember;

  @IsOptional()
  toCompanyPosition?: companyPosition;

  @IsDefined()
  changeRequestStatus!: changeRequestStatus;

  @IsDefined()
  task!: task;

  @IsDefined()
  changeRequestItems!: changeRequestItem[];

  @IsDefined()
  files!: file[];
}
