import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ChangeRequestItem';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.CHANGE_REQUEST_ITEM,
  (ChangeRequestItemModel) => {
    ChangeRequestItemModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.changeRequestId, {
        map: COLUMN.changeRequestId,
      })
      // TODO: switch to enum
      .string(ATTRIBUTE.model, {
        map: COLUMN.model,
        raw: RAW_STRING.LENGTH_100,
      })
      .string(ATTRIBUTE.fieldName, {
        map: COLUMN.fieldName,
        raw: RAW_STRING.LENGTH_100,
      })
      .string(ATTRIBUTE.value, {
        map: COLUMN.value,
        raw: RAW_STRING.TEXT,
      })
      .boolean(ATTRIBUTE.isFee, {
        map: COLUMN.isFee,
        default: true,
      })
      .string(ATTRIBUTE.dataType, {
        map: COLUMN.dataType,
        raw: RAW_STRING.LENGTH_45,
      })
      .int(ATTRIBUTE.targetId, {
        map: COLUMN.targetId,
        optional: true,
      })

      // dateTime marks
      .mixin(createdTime)
      .mixin(updatedTime)
      .mixin(deleted)

      // table name
      .map(TABLE_NAME.CHANGE_REQUEST_ITEM);
  },
);
