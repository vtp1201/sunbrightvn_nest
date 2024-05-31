import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/Click';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.CLICK, (ClickModel) => {
  ClickModel.int(ATTRIBUTE.id, {
    id: true,
    map: COLUMN.id,
    default: {
      autoincrement: true,
    },
  })
    .string(ATTRIBUTE.googleClientId, {
      map: COLUMN.googleClientId,
      raw: RAW_STRING.LENGTH_225,
      optional: true,
    })
    .string(ATTRIBUTE.ipAddress, {
      map: COLUMN.ipAddress,
      raw: RAW_STRING.LENGTH_45,
      optional: true,
    })
    .int(ATTRIBUTE.voucherTypeId, {
      map: COLUMN.voucherTypeId,
      optional: true,
    })

    // dateTime marks
    .mixin(createdTime)
    .mixin(updatedTime)
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.CLICK);
});
