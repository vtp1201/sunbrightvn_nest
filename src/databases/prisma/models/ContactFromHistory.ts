import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ContactFromHistory';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.CONTACT_FROM_HISTORY,
  (ContactFromHistoryModel) => {
    ContactFromHistoryModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.customerId, {
        map: COLUMN.customerId,
      })
      .int(ATTRIBUTE.contactFromId, {
        map: COLUMN.contactFromId,
      })
      .string(ATTRIBUTE.tagName, {
        map: COLUMN.tagName,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })

      // dateTime marks
      .mixin(createdTime)
      .mixin(updatedTime)
      .mixin(deleted)

      // table name
      .map(TABLE_NAME.CONTACT_FROM_HISTORY);
  },
);
