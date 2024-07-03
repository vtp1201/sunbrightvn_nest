import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/NotificationStatus';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { notificationTemplate } from '.';

export default createModel(
  MODEL_NAME.NOTIFICATION_STATUS,
  (NotificationStatusModel) => {
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
    const notificationTemplatesRelation = oneToMany({
      model: notificationTemplate,
      relation: RELATION.notificationTemplates,
    });

    // defined Model
    process.nextTick(() => {
      NotificationStatusModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.LENGTH_45,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(notificationTemplatesRelation)

        // table name
        .map(TABLE_NAME.NOTIFICATION_STATUS);
    });
  },
);
