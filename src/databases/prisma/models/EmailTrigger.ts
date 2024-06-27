import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/EmailTrigger';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.EMAIL_TRIGGER, (EmailTriggerModel) => {
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
    EmailTriggerModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.type, {
        map: COLUMN.type,
        optional: true,
      })
      .json(ATTRIBUTE.serviceTypeIds, {
        map: COLUMN.serviceTypeIds,
        optional: true,
      })
      .int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isRemindAgent, {
        map: COLUMN.isRemindAgent,
        default: false,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.processStepId)

      // table name
      .map(TABLE_NAME.EMAIL_TRIGGER);
  });
});
