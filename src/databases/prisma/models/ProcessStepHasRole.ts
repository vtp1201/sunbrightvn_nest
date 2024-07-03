import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ProcessStepHasRole';
import { oneToOne } from '../mixins';
import { processStep, role } from '.';

export default createModel(
  MODEL_NAME.PROCESS_STEP_HAS_ROLE,
  (ProcessStepHasRoleModel) => {
    // defined Relations
    const processStepRelation = oneToOne({
      attribute: ATTRIBUTE.processStepId,
      model: processStep,
      relation: RELATION.processStep,
    });
    const roleRelation = oneToOne({
      attribute: ATTRIBUTE.roleId,
      model: role,
      relation: RELATION.role,
    });

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

        // relations
        .mixin(processStepRelation)
        .mixin(roleRelation)

        // indexes
        .id({
          fields: [ATTRIBUTE.processStepId, ATTRIBUTE.roleId],
        })

        // table name
        .map(TABLE_NAME.PROCESS_STEP_HAS_ROLE);
    });
  },
);
