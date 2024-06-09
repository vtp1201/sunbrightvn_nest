import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_NUMBER } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ActionProcessStep';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.ACTION_PROCESS_STEP,
  (ActionProcessStepModel) => {
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
      ActionProcessStepModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.processStepId, {
          map: COLUMN.processStepId,
        })
        .int(ATTRIBUTE.nextProcessStepId, {
          map: COLUMN.nextProcessStepId,
        })
        .int(ATTRIBUTE.countryId, {
          map: COLUMN.countryId,
          optional: true,
        })
        .int(ATTRIBUTE.bankId, {
          map: COLUMN.bankId,
          optional: true,
        })
        .int(ATTRIBUTE.priority, {
          map: COLUMN.priority,
          optional: true,
          default: 1,
          raw: RAW_NUMBER.TINY_INT,
        })
        .int(ATTRIBUTE.serviceTypeId, {
          map: COLUMN.serviceTypeId,
          optional: true,
        })
        .int(ATTRIBUTE.actionStepTypeId, {
          map: COLUMN.actionStepTypeId,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // table name
        .map(TABLE_NAME.ACTION_PROCESS_STEP);
    });
  },
);
