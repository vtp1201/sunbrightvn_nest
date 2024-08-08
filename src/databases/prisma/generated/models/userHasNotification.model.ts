import { IsBoolean, IsDate, IsDefined, IsInt } from 'class-validator';

import { notification, user } from './';

export class userHasNotification {
  @IsDefined()
  @IsInt()
  userId!: number;

  @IsDefined()
  @IsInt()
  notificationId!: number;

  @IsDefined()
  @IsBoolean()
  isRead!: boolean;

  @IsDefined()
  @IsDate()
  readAt!: Date;

  @IsDefined()
  user!: user;

  @IsDefined()
  notification!: notification;
}
