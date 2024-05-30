import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ApiExample';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.API_EXAMPLE, (ApiExampleModel) => {
  ApiExampleModel.int(ATTRIBUTE.id, {
    id: true,
    map: COLUMN.id,
    default: {
      autoincrement: true,
    },
  })
    .int(ATTRIBUTE.apiId, {
      map: COLUMN.apiId,
    })
    .int(ATTRIBUTE.apiStatusId, {
      map: COLUMN.apiStatusId,
    })
    .int(ATTRIBUTE.apiGroupId, {
      map: COLUMN.apiGroupId,
      optional: true,
    })
    .json(ATTRIBUTE.body, {
      map: COLUMN.body,
      optional: true,
    })
    .json(ATTRIBUTE.param, {
      map: COLUMN.param,
      optional: true,
    })
    .json(ATTRIBUTE.query, {
      map: COLUMN.query,
      optional: true,
    })
    .json(ATTRIBUTE.response, {
      map: COLUMN.response,
      optional: true,
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
    .map(TABLE_NAME.API_EXAMPLE);
});
