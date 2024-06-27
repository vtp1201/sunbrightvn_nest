import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
} from '../utils/enums/EmailTemplateHasReceiver';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.EMAIL_TEMPLATE_HAS_RECEIVER,
  (EmailTemplateHasReceiverModel) => {
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
      EmailTemplateHasReceiverModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.emailTemplateId, {
          map: COLUMN.emailTemplateId,
        })
        .string(ATTRIBUTE.email, {
          map: COLUMN.email,
          optional: true,
          raw: RAW_STRING.LENGTH_100,
        })
        .int(ATTRIBUTE.userId, {
          map: COLUMN.userId,
          optional: true,
        })
        .int(ATTRIBUTE.roleId, {
          map: COLUMN.roleId,
          optional: true,
        })
        .int(ATTRIBUTE.groupId, {
          map: COLUMN.groupId,
          optional: true,
        })
        .boolean(ATTRIBUTE.isMainReceiver, {
          map: COLUMN.isMainReceiver,
          default: false,
        })
        .boolean(ATTRIBUTE.isCcReceiver, {
          map: COLUMN.isCcReceiver,
          default: false,
        })
        .boolean(ATTRIBUTE.isBccReceiver, {
          map: COLUMN.isBccReceiver,
          default: false,
        })
        .boolean(ATTRIBUTE.isExcluded, {
          map: COLUMN.isExcluded,
          default: false,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // indexes
        // .raw(INDEX.emailTemplateId)
        // .raw(INDEX.groupId)
        // .raw(INDEX.roleId)
        // .raw(INDEX.userId)

        // table name
        .map(TABLE_NAME.EMAIL_TEMPLATE_HAS_RECEIVER);
    });
  },
);
