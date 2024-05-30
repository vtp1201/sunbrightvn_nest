import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/AdditionProcess';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.ADDITION_PROCESS,
  (AdditionProcessModel) => {
    AdditionProcessModel.int(ATTRIBUTE.id, {
      map: COLUMN.id,
      id: true,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
      })
      .string(ATTRIBUTE.trackingLink, {
        map: COLUMN.trackingLink,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.trackingLink, {
        map: COLUMN.trackingLink,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .json(ATTRIBUTE.serviceTypeIds, {
        map: COLUMN.serviceTypeIds,
        optional: true,
      })
      .mixin(createdTime)
      .mixin(updatedTime)
      .mixin(deleted)
      .map(TABLE_NAME.ADDITION_PROCESS);
  },
);
