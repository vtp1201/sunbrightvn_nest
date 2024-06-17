import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ProcessStepHasRole';

export default createModel(
  MODEL_NAME.PROCESS_STEP_HAS_ROLE,
  (ProcessStepHasRoleModel) => {
    // defined Model
    process.nextTick(() => {
      ProcessStepHasRoleModel.int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
      })
        .int(ATTRIBUTE.roleId, {
          map: COLUMN.roleId,
        })
        .boolean(ATTRIBUTE.isMain, {
          map: COLUMN.isMain,
          default: false,
        })

        // indexes
        .id({
          fields: [ATTRIBUTE.processStepId, ATTRIBUTE.roleId],
        })

        // table name
        .map(TABLE_NAME.PROCESS_STEP_HAS_ROLE);
    });
  },
);
