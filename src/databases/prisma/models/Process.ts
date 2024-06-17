import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Process';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.PROCESS, (ProcessModel) => {
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
    ProcessModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
      })
      .int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
      })
      .int(ATTRIBUTE.personId, {
        map: COLUMN.personId,
        optional: true,
      })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
        optional: true,
      })
      .int(ATTRIBUTE.personId, {
        map: COLUMN.personId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isApproved, {
        map: COLUMN.isApproved,
        default: false,
        optional: true,
      })
      .boolean(ATTRIBUTE.isRejected, {
        map: COLUMN.isRejected,
        default: false,
        optional: true,
      })
      .boolean(ATTRIBUTE.isTerminated, {
        map: COLUMN.isTerminated,
        default: false,
        optional: true,
      })
      .dateTime(ATTRIBUTE.finishedTime, {
        map: COLUMN.finishedTime,
        optional: true,
      })
      .dateTime(ATTRIBUTE.remindStartTime, {
        map: COLUMN.remindStartTime,
        optional: true,
      })
      // TODO: remove status
      .int(ATTRIBUTE.status, {
        map: COLUMN.status,
        optional: true,
      })
      .int(ATTRIBUTE.bankingProcessId, {
        map: COLUMN.bankingProcessId,
        optional: true,
      })
      .int(ATTRIBUTE.additionProcessId, {
        map: COLUMN.additionProcessId,
        optional: true,
      })
      .int(ATTRIBUTE.priority, {
        map: COLUMN.priority,
        optional: true,
      })
      .json(ATTRIBUTE.description, {
        map: COLUMN.description,
        optional: true,
      })
      .json(ATTRIBUTE.parentId, {
        map: COLUMN.parentId,
        optional: true,
        default: [],
      })
      .json(ATTRIBUTE.extraValue, {
        map: COLUMN.extraValue,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.additionProcessId)
      .raw(INDEX.bankingProcessId)
      .raw(INDEX.personId)
      .raw(INDEX.processStepId)
      .raw(INDEX.userId)
      .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.PROCESS);
  });
});
