import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  RELATION,
} from '../utils/enums/Notification';
import { createdTime, deleted, oneToMany, oneToOne } from '../mixins';
import { notificationType, userHasNotification } from '.';

export default createModel(MODEL_NAME.NOTIFICATION, (NotificationModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
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
  const userHasNotificationsRelation = oneToMany({
    model: userHasNotification,
    relation: RELATION.userHasNotifications,
  });
  const notificationTypeRelation = oneToOne({
    attribute: ATTRIBUTE.notificationTypeId,
    model: notificationType,
    relation: RELATION.notificationType,
  });

  // defined Model
  process.nextTick(() => {
    NotificationModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.type, {
        map: COLUMN.type,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.targetId, {
        map: COLUMN.targetId,
        optional: true,
      })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
        optional: true,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
        optional: true,
      })
      .int(ATTRIBUTE.profileId, {
        map: COLUMN.profileId,
        optional: true,
      })
      .int(ATTRIBUTE.supportCaseId, {
        map: COLUMN.supportCaseId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isRead, {
        map: COLUMN.isRead,
        default: false,
      })
      .int(ATTRIBUTE.notificationTypeId, {
        map: COLUMN.notificationTypeId,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(notificationTypeRelation)
      .mixin(userHasNotificationsRelation)

      // indexes
      // .raw(INDEX.notificationTypeId)

      // table name
      .map(TABLE_NAME.NOTIFICATION);
  });
});
