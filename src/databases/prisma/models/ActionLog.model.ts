import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/actionLog';
import DateTimeMixin from '../mixins/DateTime.mixin';

export default createModel(MODEL_NAME.ACTION_LOG, (ActionLogModel) => {
  ActionLogModel.int(ATTRIBUTE.id, {
    map: COLUMN.id,
    id: true,
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
    .mixin(DateTimeMixin)
    .map(TABLE_NAME.ACTION_LOG);
});
