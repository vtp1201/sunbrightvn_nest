import { createModel } from 'schemix';

import { processStep, role } from '.';
import { oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/ProcessStepHasRole';

export default createModel(MODEL_NAME.PROCESS_STEP_HAS_ROLE, (ProcessStepHasRoleModel) => {
  // defined Relations
  const processStepRelation = oneToOne({
    attribute: ATTRIBUTE.processStepId,
    map: INDEX_NAME.processStepId,
    model: processStep,
    relation: RELATION.processStep,
  });
  const roleRelation = oneToOne({
    attribute: ATTRIBUTE.roleId,
    map: INDEX_NAME.roleId,
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

      // indexes
      .raw(INDEX.processStepId)
      .raw(INDEX.roleId)

      // table name
      .map(TABLE_NAME.PROCESS_STEP_HAS_ROLE);
  });
});
