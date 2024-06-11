import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/File';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.FILE, (FileModel) => {
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
    FileModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.path, {
        map: COLUMN.path,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.mimeType, {
        map: COLUMN.mimeType,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.s3Path, {
        map: COLUMN.s3Path,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
        optional: true,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
        optional: true,
      })
      .int(ATTRIBUTE.messageId, {
        map: COLUMN.messageId,
        optional: true,
      })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
        optional: true,
      })
      .int(ATTRIBUTE.fileTypeId, {
        map: COLUMN.fileTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
        optional: true,
      })
      .int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
        optional: true,
      })
      .int(ATTRIBUTE.filledByCompanyMemberId, {
        map: COLUMN.filledByCompanyMemberId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isFilled, {
        map: COLUMN.isFilled,
        default: false,
      })
      .string(ATTRIBUTE.fullName, {
        map: COLUMN.fullName,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.ipAddress, {
        map: COLUMN.ipAddress,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.noteId, {
        map: COLUMN.noteId,
        optional: true,
      })
      .int(ATTRIBUTE.bankId, {
        map: COLUMN.bankId,
        optional: true,
      })
      .int(ATTRIBUTE.rankingPartnerId, {
        map: COLUMN.rankingPartnerId,
        optional: true,
      })
      .int(ATTRIBUTE.changeRequestId, {
        map: COLUMN.changeRequestId,
        optional: true,
      })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.apiExampleId, {
        map: COLUMN.apiExampleId,
        optional: true,
      })
      .int(ATTRIBUTE.questionGroupId, {
        map: COLUMN.questionGroupId,
        optional: true,
      })
      .int(ATTRIBUTE.toCompanyMemberId, {
        map: COLUMN.toCompanyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.typeId, {
        map: COLUMN.typeId,
        optional: true,
      })
      .int(ATTRIBUTE.filledByUserId, {
        map: COLUMN.filledByUserId,
        optional: true,
      })
      .int(ATTRIBUTE.status, {
        map: COLUMN.status,
        default: 1,
      })
      .int(ATTRIBUTE.companyEventId, {
        map: COLUMN.companyEventId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.changeRequestId)
      .raw(INDEX.companyId)
      .raw(INDEX.companyMemberId)
      .raw(INDEX.fileTemplateId)
      .raw(INDEX.fileTypeId)
      .raw(INDEX.filledByCompanyMemberId)
      .raw(INDEX.messageId)
      .raw(INDEX.noteId)
      .raw(INDEX.questionGroupId)
      .raw(INDEX.rankingPartnerId)
      .raw(INDEX.taskId)
      .raw(INDEX.userId)
      .raw(INDEX.orderId)
      .raw(INDEX.apiExampleId)
      .raw(INDEX.companyEventId)

      // table name
      .map(TABLE_NAME.FILE);
  });
});
