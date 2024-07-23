import { createModel } from 'schemix';

import { actionStepType, company, historyFile, task, user } from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/HistoryLogCDC';

export default createModel(MODEL_NAME.HISTORY_LOG_CDC, (HistoryLogCDCModel) => {
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

  // defined Relations
  const historyFilesRelation = oneToMany({
    model: historyFile,
    relation: RELATION.historyFiles,
  });
  const actionStepTypeRelation = oneToOne({
    attribute: ATTRIBUTE.actionStepTypeId,
    map: INDEX_NAME.actionStepTypeId,
    model: actionStepType,
    relation: RELATION.actionStepType,
    option: { optional: true },
  });
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    map: INDEX_NAME.companyId,
    model: company,
    relation: RELATION.company,
    option: { optional: true },
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    map: INDEX_NAME.taskId,
    model: task,
    relation: RELATION.task,
  });
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    map: INDEX_NAME.userId,
    model: user,
    relation: RELATION.user,
  });

  // defined Model
  process.nextTick(() => {
    HistoryLogCDCModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
        optional: true,
      })
      .int(ATTRIBUTE.actionStepTypeId, {
        map: COLUMN.actionStepTypeId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(historyFilesRelation)
      .mixin(actionStepTypeRelation)
      .mixin(companyRelation)
      .mixin(taskRelation)
      .mixin(userRelation)

      // indexes
      .raw(INDEX.actionStepTypeId)
      .raw(INDEX.companyId)
      .raw(INDEX.taskId)
      .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.HISTORY_LOG_CDC);
  });
});
