import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
} from '../utils/enums/EmailTriggerHasProcess';
import { createdTime, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.EMAIL_TRIGGER_HAS_PROCESS,
  (EmailTriggerHasProcessModel) => {
    const initCreatedTime = createdTime({
      attribute: ATTRIBUTE.createdTime,
      column: COLUMN.createdTime,
    });
    const initUpdatedTime = updatedTime({
      attribute: ATTRIBUTE.updatedTime,
      column: COLUMN.updatedTime,
    });

    // defined Model
    process.nextTick(() => {
      EmailTriggerHasProcessModel.int(ATTRIBUTE.emailTriggerId, {
        map: COLUMN.emailTriggerId,
      })
        .int(ATTRIBUTE.processId, {
          map: COLUMN.processId,
        })
        .int(ATTRIBUTE.emailTemplateId, {
          map: COLUMN.emailTemplateId,
        })
        .int(ATTRIBUTE.isRemind, {
          map: COLUMN.isRemind,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)

        // ids
        .id({
          fields: [
            ATTRIBUTE.emailTemplateId,
            ATTRIBUTE.emailTriggerId,
            ATTRIBUTE.processId,
          ],
        })

        // indexes
        // .raw(INDEX.emailTriggerId)
        // .raw(INDEX.emailTemplateId)
        // .raw(INDEX.processId)

        // table name
        .map(TABLE_NAME.EMAIL_TRIGGER_HAS_PROCESS);
    });
  },
);
