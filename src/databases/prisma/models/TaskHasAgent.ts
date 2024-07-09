import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/TaskHasAgent';
import { createdTime, oneToOne } from '../mixins';
import { additionProcess, agent, task } from '.';

export default createModel(MODEL_NAME.TASK_HAS_AGENT, (TaskHasAgentModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });

  // defined Relations
  const additionProcessRelation = oneToOne({
    attribute: ATTRIBUTE.additionProcessId,
    model: additionProcess,
    relation: RELATION.additionProcess,
    option: { optional: true },
  });
  const agentRelation = oneToOne({
    attribute: ATTRIBUTE.agentId,
    model: agent,
    relation: RELATION.agent,
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    model: task,
    relation: RELATION.task,
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

      // relations
      .mixin(additionProcessRelation)
      .mixin(agentRelation)
      .mixin(taskRelation)

      // table name
      .map(TABLE_NAME.TASK_HAS_AGENT);
  });
});
