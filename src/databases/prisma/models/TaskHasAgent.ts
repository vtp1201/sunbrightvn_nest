import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/TaskHasAgent';
import { createdTime } from '../mixins';

export default createModel(MODEL_NAME.TASK_HAS_AGENT, (TaskHasAgentModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });

  // defined Model
  process.nextTick(() => {
    TaskHasAgentModel.int(ATTRIBUTE.taskId, {
      map: COLUMN.taskId,
    })
      .int(ATTRIBUTE.agentId, {
        map: COLUMN.agentId,
      })
      .int(ATTRIBUTE.additionProcessId, {
        map: COLUMN.additionProcessId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)

      // ids
      .id({
        fields: [ATTRIBUTE.taskId, ATTRIBUTE.agentId],
      })

      // table name
      .map(TABLE_NAME.TASK_HAS_AGENT);
  });
});
