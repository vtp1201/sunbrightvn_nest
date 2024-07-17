import { createModel } from 'schemix';

import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/AdditionProcess';
import { Process, billing, task, taskHasAgent } from './';

export default createModel(MODEL_NAME.ADDITION_PROCESS, (AdditionProcessModel) => {
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

  // defined Relation
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    model: task,
    relation: RELATION.task,
    map: INDEX_NAME.taskId,
  });
  const processesRelation = oneToMany({
    model: Process,
    relation: RELATION.processes,
  });
  const billingsRelation = oneToMany({
    model: billing,
    relation: RELATION.billings,
  });
  const taskHasAgentsRelation = oneToMany({
    model: taskHasAgent,
    relation: RELATION.taskHasAgents,
  });

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
      .string(ATTRIBUTE.trackingCode, {
        map: COLUMN.trackingCode,
        raw: RAW_STRING.LENGTH_100,
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

      // relations
      .mixin(taskRelation)
      .mixin(processesRelation)
      .mixin(billingsRelation)
      .mixin(taskHasAgentsRelation)

      // indexes
      .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.ADDITION_PROCESS);
  });
});
