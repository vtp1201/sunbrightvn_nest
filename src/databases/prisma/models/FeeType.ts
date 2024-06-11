import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/FeeType';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.FEE_TYPE, (FeeTypeModel) => {
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
    FeeTypeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.value, {
        map: COLUMN.value,
        optional: true,
        raw: RAW_STRING.LENGTH_45,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        optional: true,
        raw: RAW_STRING.LENGTH_45,
      })
      .int(ATTRIBUTE.cycleBegin, {
        map: COLUMN.cycleBegin,
        optional: true,
        default: 0,
      })
      .int(ATTRIBUTE.cycleTime, {
        map: COLUMN.cycleTime,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        optional: true,
        raw: RAW_STRING.TEXT,
      })

      // dateTime marks
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.FEE_TYPE);
  });
});
