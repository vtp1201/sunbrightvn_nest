import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ActionStepType';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.ACTION_STEP_TYPE,
  (ActionStepTypeModel) => {
    ActionStepTypeModel.int(ATTRIBUTE.id, {
      map: COLUMN.id,
      id: true,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .mixin(createdTime)
      .mixin(updatedTime)
      .mixin(deleted)
      .map(TABLE_NAME.ACTION_STEP_TYPE);
  },
);
