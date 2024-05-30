import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ApiStatus';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.API_STATUS, (ApiStatusModel) => {
  ApiStatusModel.int(ATTRIBUTE.id, {
    map: COLUMN.id,
    default: {
      autoincrement: true,
    },
  })
    .string(ATTRIBUTE.code, {
      map: COLUMN.code,
      raw: RAW_STRING.LENGTH_45,
    })
    .string(ATTRIBUTE.description, {
      map: COLUMN.description,
      raw: RAW_STRING.TEXT,
      optional: true,
    })

    // dateTime marks
    .mixin(createdTime)
    .mixin(updatedTime)
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.API_STATUS);
});
