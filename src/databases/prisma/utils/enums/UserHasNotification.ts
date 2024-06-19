import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  userId = 'userId',
  notificationId = 'notificationId',
  isRead = 'isRead',
  readAt = 'readAt',
}

export enum COLUMN {
  userId = 'user_id',
  notificationId = 'notification_id',
  isRead = 'is_read',
  readAt = 'read_at',
}

export enum RELATION {
  user = RELATION_DEFAULT.user,
  notification = RELATION_DEFAULT.notification,
}

export default {
  ATTRIBUTE,
  RELATION,
};
