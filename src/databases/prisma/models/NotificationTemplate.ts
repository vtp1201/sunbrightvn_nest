import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/NotificationTemplate';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.NOTIFICATION_TEMPLATE,
  (NotificationTemplateModel) => {
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
          optional: true,
        })
        .int(ATTRIBUTE.notificationTypeId, {
          map: COLUMN.notificationTypeId,
          optional: true,
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

        // indexes
        // .raw(INDEX.actionStepTypeId)
        // .raw(INDEX.notificationTypeId)
        // .raw(INDEX.notificationStatusId)
        // .raw(INDEX.processStepId)
        // .raw(INDEX.subscriptionId)

        // table name
        .map(TABLE_NAME.NOTIFICATION_TEMPLATE);
    });
  },
);
