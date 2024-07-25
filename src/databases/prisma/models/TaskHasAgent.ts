import { createModel } from 'schemix';

import { additionProcess, agent, task } from '.';
import { createdTime, oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/TaskHasAgent';

export default createModel(MODEL_NAME.TASK_HAS_AGENT, (TaskHasAgentModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });

  // defined Relations
  const additionProcessRelation = oneToOne({
    attribute: ATTRIBUTE.additionProcessId,
    map: INDEX_NAME.additionProcessId,
    model: additionProcess,
    relation: RELATION.additionProcess,
    option: { optional: true },
  });
  const agentRelation = oneToOne({
    attribute: ATTRIBUTE.agentId,
    map: INDEX_NAME.agentId,
    model: agent,
    relation: RELATION.agent,
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    map: INDEX_NAME.taskId,
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

      // relations
      .mixin(additionProcessRelation)
      .mixin(agentRelation)
      .mixin(taskRelation)

      // ids
      .id({
        fields: [ATTRIBUTE.taskId, ATTRIBUTE.agentId],
      })

      // indexes
      .raw(INDEX.additionProcessId)
      .raw(INDEX.agentId)
      .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.TASK_HAS_AGENT);
  });
});
