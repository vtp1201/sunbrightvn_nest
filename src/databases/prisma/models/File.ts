import { createModel } from 'schemix';

import {
  apiExample,
  changeRequest,
  company,
  companyEvent,
  companyMember,
  companyShare,
  fileTemplate,
  fileType,
  historyFile,
  message,
  note,
  order,
  questionGroup,
  rankingPartner,
  task,
  user,
} from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/File';

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

  // defined Relations
  const companySharesRelation = oneToMany({
    model: companyShare,
    relation: RELATION.companyShares,
  });
  const changeRequestRelation = oneToOne({
    attribute: ATTRIBUTE.changeRequestId,
    model: changeRequest,
    relation: RELATION.changeRequest,
    map: INDEX_NAME.changeRequestId,
    option: { optional: true },
  });
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
    map: INDEX_NAME.companyId,
    option: { optional: true },
  });
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    model: companyMember,
    relation: RELATION.companyMember,
    map: INDEX_NAME.companyMemberId,
    isNeedName: true,
    option: { optional: true },
  });
  const fileTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.fileTemplateId,
    model: fileTemplate,
    relation: RELATION.fileTemplate,
    map: INDEX_NAME.fileTemplateId,
    option: { optional: true },
  });
  const fileTypeRelation = oneToOne({
    attribute: ATTRIBUTE.fileTypeId,
    model: fileType,
    relation: RELATION.fileType,
    map: INDEX_NAME.fileTypeId,
    option: { optional: true },
  });
  const filledByCompanyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.filledByCompanyMemberId,
    model: companyMember,
    relation: RELATION.filledByCompanyMember,
    map: INDEX_NAME.filledByCompanyMemberId,
    isNeedName: true,
    option: { optional: true },
  });
  const messageRelation = oneToOne({
    attribute: ATTRIBUTE.messageId,
    model: message,
    relation: RELATION.message,
    map: INDEX_NAME.messageId,
    option: { optional: true },
  });
  const noteRelation = oneToOne({
    attribute: ATTRIBUTE.noteId,
    model: note,
    relation: RELATION.note,
    map: INDEX_NAME.noteId,
    option: { optional: true },
  });
  const orderRelation = oneToOne({
    attribute: ATTRIBUTE.orderId,
    model: order,
    relation: RELATION.order,
    map: INDEX_NAME.orderId,
    option: { optional: true },
  });
  const questionGroupRelation = oneToOne({
    attribute: ATTRIBUTE.questionGroupId,
    model: questionGroup,
    relation: RELATION.questionGroup,
    map: INDEX_NAME.questionGroupId,
    option: { optional: true },
  });
  const rankingPartnerRelation = oneToOne({
    attribute: ATTRIBUTE.rankingPartnerId,
    model: rankingPartner,
    relation: RELATION.rankingPartner,
    map: INDEX_NAME.rankingPartnerId,
    option: { optional: true },
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    model: task,
    relation: RELATION.task,
    map: INDEX_NAME.taskId,
    option: { optional: true },
  });
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    model: user,
    relation: RELATION.user,
    map: INDEX_NAME.userId,
    option: { optional: true },
  });
  const apiExampleRelation = oneToOne({
    attribute: ATTRIBUTE.apiExampleId,
    model: apiExample,
    relation: RELATION.apiExample,
    map: INDEX_NAME.apiExampleId,
    option: { optional: true },
  });
  const companyEventRelation = oneToOne({
    attribute: ATTRIBUTE.companyEventId,
    model: companyEvent,
    relation: RELATION.companyEvent,
    map: INDEX_NAME.companyEventId,
    option: { optional: true },
  });
  const historyFilesRelation = oneToMany({
    model: historyFile,
    relation: RELATION.historyFiles,
  });

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

      // relations
      .mixin(companySharesRelation)
      .mixin(changeRequestRelation)
      .mixin(companyRelation)
      .mixin(companyMemberRelation)
      .mixin(fileTemplateRelation)
      .mixin(fileTypeRelation)
      .mixin(filledByCompanyMemberRelation)
      .mixin(messageRelation)
      .mixin(noteRelation)
      .mixin(orderRelation)
      .mixin(questionGroupRelation)
      .mixin(rankingPartnerRelation)
      .mixin(taskRelation)
      .mixin(userRelation)
      .mixin(apiExampleRelation)
      .mixin(companyEventRelation)
      .mixin(historyFilesRelation)

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
