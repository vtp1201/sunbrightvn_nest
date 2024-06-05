import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanySuffix';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.COMPANY_SUFFIX, (CompanySuffixModel) => {
  CompanySuffixModel.int(ATTRIBUTE.id, {
    id: true,
    map: COLUMN.id,
    default: {
      autoincrement: true,
    },
  })
    .string(ATTRIBUTE.name, {
      map: COLUMN.name,
      raw: RAW_STRING.LENGTH_45,
    })
    .string(ATTRIBUTE.description, {
      map: COLUMN.description,
      raw: RAW_STRING.TEXT,
      optional: true,
    })
    .boolean(ATTRIBUTE.isPrefix, {
      map: COLUMN.isPrefix,
      default: false,
    })

    // dateTime marks
    .mixin(createdTime)
    .mixin(updatedTime)
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.COMPANY_SUFFIX);
});
