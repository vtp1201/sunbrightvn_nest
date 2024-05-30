import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ApiHasGroup';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.API_HAS_GROUP, (ApiHasGroupModel) => {
  ApiHasGroupModel.int(ATTRIBUTE.id, {
    map: COLUMN.id,
    default: {
      autoincrement: true,
    },
  })
    .int(ATTRIBUTE.apiId, {
      map: COLUMN.apiId,
    })
    .int(ATTRIBUTE.apiGroupId, {
      map: COLUMN.apiGroupId,
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
    .map(TABLE_NAME.API_HAS_GROUP);
});
