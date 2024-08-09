import { notification } from '@prisma/client';

import { NotificationService as service } from '../notification.service';

export type Notification = notification;

export type NotificationService = service;
