import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/EntityType';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.ENTITY_TYPE, (EntityTypeModel) => {
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
    EntityTypeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.guid, {
        map: COLUMN.guid,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.country, {
        map: COLUMN.country,
        optional: true,
        raw: RAW_STRING.TEXT,
      })

      // dateTime marks
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.ENTITY_TYPE);
  });
});
