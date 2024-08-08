import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { notificationType, userHasNotification } from './';

export class notification {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  type?: number;

  @IsDefined()
  @IsString()
  description!: string;

  @IsOptional()
  @IsInt()
  targetId?: number;

  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsOptional()
  @IsInt()
  taskId?: number;

  @IsOptional()
  @IsInt()
  profileId?: number;

  @IsOptional()
  @IsInt()
  supportCaseId?: number;

  @IsDefined()
  @IsBoolean()
  isRead!: boolean;

  @IsDefined()
  @IsInt()
  notificationTypeId!: number;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  notificationType!: notificationType;

  @IsDefined()
  userHasNotifications!: userHasNotification[];
}
