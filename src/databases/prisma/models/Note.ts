import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Note';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.NOTE, (NoteModel) => {
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
    NoteModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.title, {
        map: COLUMN.title,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
        optional: true,
      })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isBelongToClient, {
        map: COLUMN.isBelongToClient,
        default: false,
      })
      .boolean(ATTRIBUTE.isComplianceReject, {
        map: COLUMN.isComplianceReject,
        default: false,
      })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
        optional: true,
      })
      .int(ATTRIBUTE.noteTypeId, {
        map: COLUMN.noteTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
        optional: true,
      })
      .int(ATTRIBUTE.parentId, {
        map: COLUMN.parentId,
        optional: true,
      })
      .int(ATTRIBUTE.noteStatusId, {
        map: COLUMN.noteStatusId,
        optional: true,
      })
      .int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.companyId)
      // .raw(INDEX.companyMemberId)
      // .raw(INDEX.noteTypeId)
      // .raw(INDEX.processStepId)
      // .raw(INDEX.taskId)
      // .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.NOTE);
  });
});
