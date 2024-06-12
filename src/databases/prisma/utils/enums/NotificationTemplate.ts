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
  notificationTemplateHasRole = RELATION_DEFAULT.notificationTemplateHasRoles,
}

export enum INDEX {
  notificationStatusId = `@@index([${ATTRIBUTE.notificationStatusId}], map: "fk_notification_status_id_idx")`,
  notificationTypeId = `@@index([${ATTRIBUTE.notificationTypeId}], map: "fk_notification_type_id_idx")`,
  actionStepTypeId = `@@index([${ATTRIBUTE.actionStepTypeId}], map: "fk_notify_action_step_type_id_idx")`,
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: "fk_notify_process_step_id_idx")`,
  subscriptionId = `@@index([${ATTRIBUTE.subscriptionId}], map: "fk_notify_subscription_id_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
