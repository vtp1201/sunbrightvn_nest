import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  actionStepType,
  notificationStatus,
  notificationType,
  processStep,
  role,
  subscription,
} from './';

export class notificationTemplate {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  message?: string;

  @IsDefined()
  @IsBoolean()
  isNotifyToCustomer!: boolean;

  @IsDefined()
  @IsBoolean()
  isNotifyToLeader!: boolean;

  @IsDefined()
  @IsBoolean()
  isNotifyToSupporter!: boolean;

  @IsDefined()
  @IsInt()
  notificationStatusId!: number;

  @IsDefined()
  @IsInt()
  notificationTypeId!: number;

  @IsOptional()
  @IsInt()
  processStepId?: number;

  @IsOptional()
  @IsInt()
  actionStepTypeId?: number;

  @IsOptional()
  @IsInt()
  subscriptionId?: number;

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
  actionStepType?: actionStepType;

  @IsDefined()
  notificationStatus!: notificationStatus;

  @IsDefined()
  notificationType!: notificationType;

  @IsOptional()
  processStep?: processStep;

  @IsOptional()
  subscription?: subscription;

  @IsDefined()
  roles!: role[];
}
