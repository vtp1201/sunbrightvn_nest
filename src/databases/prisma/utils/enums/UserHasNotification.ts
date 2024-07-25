import { TABLE_NAME } from '../constants';
import { RELATION_DEFAULT } from './default';

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

const tableName = TABLE_NAME.USER_HAS_NOTIFICATION;
export enum INDEX_NAME {
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
  notificationId = `"${tableName}_${COLUMN.notificationId}_fkey"`,
}

export enum INDEX {
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
  notificationId = `@@index([${ATTRIBUTE.notificationId}], map: ${INDEX_NAME.notificationId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
