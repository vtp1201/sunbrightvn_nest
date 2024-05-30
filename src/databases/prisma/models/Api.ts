import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/Api';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.API, (ApiModel) => {
  ApiModel.int(ATTRIBUTE.id, {
    map: COLUMN.id,
    id: true,
    default: {
      autoincrement: true,
    },
  })
    .string(ATTRIBUTE.url, {
      map: COLUMN.url,
      raw: RAW_STRING.LENGTH_255,
    })
    .int(ATTRIBUTE.apiMethodId, {
      map: COLUMN.apiMethodId,
    })
    .json(ATTRIBUTE.note, {
      map: COLUMN.note,
      optional: true,
    })
    .boolean(ATTRIBUTE.isRecaptcha, {
      map: COLUMN.isRecaptcha,
      default: false,
      optional: true,
    })
    .boolean(ATTRIBUTE.isAuthorization, {
      map: COLUMN.isAuthorization,
      default: false,
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
    .map(TABLE_NAME.API);
});
