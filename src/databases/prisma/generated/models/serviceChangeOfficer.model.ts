import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { changeRequestStatus, companyMemberType, fileTemplate } from './';

export class serviceChangeOfficer {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  companyMemberTypeId!: number;

  @IsDefined()
  @IsInt()
  changeRequestStatusId!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

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
  changeRequestStatus?: changeRequestStatus;

  @IsOptional()
  companyMemberType?: companyMemberType;

  @IsDefined()
  fileTemplates!: fileTemplate[];
}
