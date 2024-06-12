import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  type = 'type',
  description = 'description',
  targetId = 'targetId',
  orderId = 'orderId',
  taskId = 'taskId',
  profileId = 'profileId',
  supportCaseId = 'supportCaseId',
  isRead = 'isRead',
  notificationTypeId = 'notificationTypeId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  type = 'type',
  description = 'description',
  targetId = 'target_id',
  orderId = 'order_id',
  taskId = 'task_id',
  profileId = 'profile_id',
  supportCaseId = 'support_case_id',
  isRead = 'is_read',
  notificationTypeId = 'notification_type_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  notificationType = RELATION_DEFAULT.notificationType,
  userHasNotifications = RELATION_DEFAULT.userHasNotifications,
}

export enum INDEX {
  notificationTypeId = `@@index([${ATTRIBUTE.notificationTypeId}], map: "fk_not_notification_type_id_not_id_6s6")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
