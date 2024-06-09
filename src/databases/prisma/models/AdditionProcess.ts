import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/AdditionProcess';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.ADDITION_PROCESS,
  (AdditionProcessModel) => {
    const initCreatedTime = createdTime({
      attribute: ATTRIBUTE.createdTime,
      column: COLUMN.createdTime,
    });
    const initUpdatedTime = updatedTime({
      attribute: ATTRIBUTE.updatedTime,
      column: COLUMN.updatedTime,
    });
    const initDeleted = deleted(
      {
        attribute: ATTRIBUTE.deletedTime,
        column: COLUMN.deletedTime,
      },
      {
        attribute: ATTRIBUTE.isDeleted,
        column: COLUMN.isDeleted,
      },
    );

    // defined Model
    process.nextTick(() => {
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

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // table name
        .map(TABLE_NAME.ADDITION_PROCESS);
    });
  },
);
