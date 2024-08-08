import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { emailTemplate, role, teamGroup, user } from './';

export class emailTemplateHasReceiver {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  emailTemplateId!: number;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsInt()
  roleId?: number;

  @IsOptional()
  @IsInt()
  groupId?: number;

  @IsDefined()
  @IsBoolean()
  isMainReceiver!: boolean;

  @IsDefined()
  @IsBoolean()
  isCcReceiver!: boolean;

  @IsDefined()
  @IsBoolean()
  isBccReceiver!: boolean;

  @IsDefined()
  @IsBoolean()
  isExcluded!: boolean;

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
  emailTemplate!: emailTemplate;

  @IsOptional()
  group?: teamGroup;

  @IsOptional()
  role?: role;

  @IsOptional()
  user?: user;
}
