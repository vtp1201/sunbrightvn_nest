import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/SupportCasePriority';
import { deleted } from '../mixins';

export default createModel(
  MODEL_NAME.SUPPORT_CASE_PRIORITY,
  (SupportCasePriorityModel) => {
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
      SupportCasePriorityModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.LENGTH_100,
        })
        .string(ATTRIBUTE.description, {
          map: COLUMN.description,
          raw: RAW_STRING.LENGTH_200,
          optional: true,
        })

        // dateTime marks
        .mixin(initDeleted)

        // table name
        .map(TABLE_NAME.SUPPORT_CASE_PRIORITY);
    });
  },
);
