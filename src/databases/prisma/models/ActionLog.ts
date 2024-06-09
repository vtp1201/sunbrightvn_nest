import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ActionLog';
import { createdTime, deleted } from '../mixins';

export default createModel(MODEL_NAME.ACTION_LOG, (ActionLogModel) => {
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

  // defined Model
  process.nextTick(() => {
    ActionLogModel.int(ATTRIBUTE.id, {
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.type, {
        map: COLUMN.type,
      })
      .id({
        fields: [ATTRIBUTE.id, ATTRIBUTE.type],
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.ACTION_LOG);
  });
});
