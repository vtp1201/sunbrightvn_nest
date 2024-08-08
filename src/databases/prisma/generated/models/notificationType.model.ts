import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { notification, notificationTemplate } from './';

export class notificationType {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

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
  notifications!: notification[];

  @IsDefined()
  notificationTemplates!: notificationTemplate[];
}
