import { notification } from '@prisma/client';

export * from '../notification.service';
export * from '../notification.processor';

export type Notification = notification;
