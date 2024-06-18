import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/ToolBusinessEntity';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.TOOL_BUSINESS_ENTITY,
  (ToolBusinessEntityModel) => {
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
      ToolBusinessEntityModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.optionId, {
          map: COLUMN.optionId,
        })
        .int(ATTRIBUTE.entityTypeId, {
          map: COLUMN.entityTypeId,
        })
        .int(ATTRIBUTE.score, {
          map: COLUMN.score,
          optional: true,
        })
        .boolean(ATTRIBUTE.isReject, {
          map: COLUMN.isReject,
          default: false,
        })
        .boolean(ATTRIBUTE.isReset, {
          map: COLUMN.isReset,
          default: false,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // indexes
        .raw(INDEX.entityTypeId)
        .raw(INDEX.optionId)

        // table name
        .map(TABLE_NAME.TOOL_BUSINESS_ENTITY);
    });
  },
);
