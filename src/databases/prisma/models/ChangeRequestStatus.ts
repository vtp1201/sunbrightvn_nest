import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ChangeRequestStatus';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.CHANGE_REQUEST_STATUS,
  (ChangeRequestStatusModel) => {
    ChangeRequestStatusModel.int(ATTRIBUTE.id, {
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

      // dateTime marks
      .mixin(createdTime)
      .mixin(updatedTime)
      .mixin(deleted)

      // table name
      .map(TABLE_NAME.CHANGE_REQUEST_STATUS);
  },
);
