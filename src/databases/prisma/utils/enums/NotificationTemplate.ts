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

export enum INDEX {
  notificationStatusId = `@@index([${ATTRIBUTE.notificationStatusId}])`,
  notificationTypeId = `@@index([${ATTRIBUTE.notificationTypeId}])`,
  actionStepTypeId = `@@index([${ATTRIBUTE.actionStepTypeId}])`,
  processStepId = `@@index([${ATTRIBUTE.processStepId}])`,
  subscriptionId = `@@index([${ATTRIBUTE.subscriptionId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
