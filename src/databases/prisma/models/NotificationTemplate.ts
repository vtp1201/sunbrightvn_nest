import { createModel } from 'schemix';

import {
  actionStepType,
  notificationStatus,
  notificationType,
  processStep,
  role,
  subscription,
} from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  INDEX_NAME,
  RELATION,
} from '../utils/enums/NotificationTemplate';

export default createModel(MODEL_NAME.NOTIFICATION_TEMPLATE, (NotificationTemplateModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });
  const initDeleted = deleted(
    {
      attribute: ATTRIBUTE.deletedTime,
      column: COLUMN.deletedTime,
    },
    {
      attribute: ATTRIBUTE.isDeleted,
      column: COLUMN.isDeleted,
    },
  );

  // defined Relations
  const actionStepTypeRelation = oneToOne({
    attribute: ATTRIBUTE.actionStepTypeId,
    map: INDEX_NAME.actionStepTypeId,
    model: actionStepType,
    relation: RELATION.actionStepType,
    option: { optional: true },
  });
  const notificationStatusRelation = oneToOne({
    attribute: ATTRIBUTE.notificationStatusId,
    map: INDEX_NAME.notificationStatusId,
    model: notificationStatus,
    relation: RELATION.notificationStatus,
  });
  const notificationTypeRelation = oneToOne({
    attribute: ATTRIBUTE.notificationTypeId,
    map: INDEX_NAME.notificationTypeId,
    model: notificationType,
    relation: RELATION.notificationType,
  });
  const processStepRelation = oneToOne({
    attribute: ATTRIBUTE.processStepId,
    map: INDEX_NAME.processStepId,
    model: processStep,
    relation: RELATION.processStep,
    option: { optional: true },
  });
  const subscriptionRelation = oneToOne({
    attribute: ATTRIBUTE.subscriptionId,
    map: INDEX_NAME.subscriptionId,
    model: subscription,
    relation: RELATION.subscription,
    option: { optional: true },
  });
  const rolesRelation = oneToMany({
    model: role,
    relation: RELATION.roles,
  });

  // defined Model
  process.nextTick(() => {
    NotificationTemplateModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.message, {
        map: COLUMN.message,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .boolean(ATTRIBUTE.isNotifyToCustomer, {
        map: COLUMN.isNotifyToCustomer,
        default: false,
      })
      .boolean(ATTRIBUTE.isNotifyToLeader, {
        map: COLUMN.isNotifyToLeader,
        default: false,
      })
      .boolean(ATTRIBUTE.isNotifyToSupporter, {
        map: COLUMN.isNotifyToSupporter,
        default: false,
      })
      .int(ATTRIBUTE.notificationStatusId, {
        map: COLUMN.notificationStatusId,
      })
      .int(ATTRIBUTE.notificationTypeId, {
        map: COLUMN.notificationTypeId,
      })
      .int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
        optional: true,
      })
      .int(ATTRIBUTE.actionStepTypeId, {
        map: COLUMN.actionStepTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.subscriptionId, {
        map: COLUMN.subscriptionId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(actionStepTypeRelation)
      .mixin(notificationStatusRelation)
      .mixin(notificationTypeRelation)
      .mixin(processStepRelation)
      .mixin(subscriptionRelation)
      .mixin(rolesRelation)

      // indexes
      .raw(INDEX.actionStepTypeId)
      .raw(INDEX.notificationTypeId)
      .raw(INDEX.notificationStatusId)
      .raw(INDEX.processStepId)
      .raw(INDEX.subscriptionId)

      // table name
      .map(TABLE_NAME.NOTIFICATION_TEMPLATE);
  });
});
