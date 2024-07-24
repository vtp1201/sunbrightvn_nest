import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  message = 'message',
  isNotifyToSupporter = 'isNotifyToSupporter',
  isNotifyToCustomer = 'isNotifyToCustomer',
  isNotifyToLeader = 'isNotifyToLeader',
  notificationStatusId = 'notificationStatusId',
  notificationTypeId = 'notificationTypeId',
  processStepId = 'processStepId',
  actionStepTypeId = 'actionStepTypeId',
  subscriptionId = 'subscriptionId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  message = 'message',
  isNotifyToSupporter = 'is_notify_to_supporter',
  isNotifyToCustomer = 'is_notify_to_customer',
  isNotifyToLeader = 'is_notify_to_leader',
  notificationStatusId = 'notification_status_id',
  notificationTypeId = 'notification_type_id',
  processStepId = 'process_step_id',
  actionStepTypeId = 'action_step_type_id',
  subscriptionId = 'subscription_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  actionStepType = RELATION_DEFAULT.actionStepType,
  notificationStatus = RELATION_DEFAULT.notificationStatus,
  notificationType = RELATION_DEFAULT.notificationType,
  processStep = RELATION_DEFAULT.processStep,
  subscription = RELATION_DEFAULT.subscription,
  roles = RELATION_DEFAULT.roles,
}

const tableName = TABLE_NAME.NOTIFICATION_TEMPLATE;
export enum INDEX_NAME {
  notificationStatusId = `"${tableName}_${COLUMN.notificationStatusId}_fkey"`,
  notificationTypeId = `"${tableName}_${COLUMN.notificationTypeId}_fkey"`,
  actionStepTypeId = `"${tableName}_${COLUMN.actionStepTypeId}_fkey"`,
  processStepId = `"${tableName}_${COLUMN.processStepId}_fkey"`,
  subscriptionId = `"${tableName}_${COLUMN.subscriptionId}_fkey"`,
}

export enum INDEX {
  notificationStatusId = `@@index([${ATTRIBUTE.notificationStatusId}], map: ${INDEX_NAME.notificationStatusId})`,
  notificationTypeId = `@@index([${ATTRIBUTE.notificationTypeId}], map: ${INDEX_NAME.notificationTypeId})`,
  actionStepTypeId = `@@index([${ATTRIBUTE.actionStepTypeId}], map: ${INDEX_NAME.actionStepTypeId})`,
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: ${INDEX_NAME.processStepId})`,
  subscriptionId = `@@index([${ATTRIBUTE.subscriptionId}], map: ${INDEX_NAME.subscriptionId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
