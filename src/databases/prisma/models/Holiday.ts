import { createModel } from 'schemix';

import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Holiday';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.HOLIDAY, (HolidayModel) => {
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
    HolidayModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.TEXT,
      })
      .int(ATTRIBUTE.day, {
        map: COLUMN.day,
      })
      .int(ATTRIBUTE.month, {
        map: COLUMN.month,
      })
      .int(ATTRIBUTE.year, {
        map: COLUMN.year,
      })
      .dateTime(ATTRIBUTE.date, {
        map: COLUMN.date,
        raw: RAW_DATE_TIME.DATE_ONLY,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.countryId)

      // table name
      .map(TABLE_NAME.HOLIDAY);
  });
});
