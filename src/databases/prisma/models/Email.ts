import { createModel } from 'schemix';

import { agent, company, companyMember, emailTemplate, Process } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Email';

export default createModel(MODEL_NAME.EMAIL, (EmailModel) => {
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

  // defined relations
  const agentRelation = oneToOne({
    attribute: ATTRIBUTE.agentId,
    model: agent,
    relation: RELATION.agent,
    map: INDEX_NAME.agentId,
    option: { optional: true },
  });
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    model: companyMember,
    relation: RELATION.companyMember,
    map: INDEX_NAME.companyMemberId,
    option: { optional: true },
  });
  const emailTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.emailTemplateId,
    model: emailTemplate,
    relation: RELATION.emailTemplate,
    map: INDEX_NAME.emailTemplateId,
    option: { optional: true },
  });
  const processRelation = oneToOne({
    attribute: ATTRIBUTE.processId,
    model: Process,
    relation: RELATION.process,
    map: INDEX_NAME.processId,
    option: { optional: true },
  });
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
    map: INDEX_NAME.companyId,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    EmailModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.emailTemplateId, {
        map: COLUMN.emailTemplateId,
        optional: true,
      })
      .string(ATTRIBUTE.subject, {
        map: COLUMN.subject,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.agentId, {
        map: COLUMN.agentId,
        optional: true,
      })
      .int(ATTRIBUTE.processId, {
        map: COLUMN.processId,
        optional: true,
      })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
        optional: true,
      })
      .int(ATTRIBUTE.order, {
        map: COLUMN.order,
        optional: true,
      })
      .bigInt(ATTRIBUTE.timeToSend, {
        map: COLUMN.timeToSend,
        optional: true,
      })
      .boolean(ATTRIBUTE.isCompleted, {
        map: COLUMN.isCompleted,
        default: false,
      })
      .boolean(ATTRIBUTE.isError, {
        map: COLUMN.isError,
        default: false,
      })
      .boolean(ATTRIBUTE.isRunning, {
        map: COLUMN.isRunning,
        default: false,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.emailFrom, {
        map: COLUMN.emailFrom,
        optional: true,
        raw: RAW_STRING.LENGTH_200,
      })
      .string(ATTRIBUTE.emailTo, {
        map: COLUMN.emailTo,
        optional: true,
        raw: RAW_STRING.LENGTH_225,
      })
      .string(ATTRIBUTE.emailCc, {
        map: COLUMN.emailCc,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.attachments, {
        map: COLUMN.attachments,
        optional: true,
        raw: RAW_STRING.LONG_TEXT,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(agentRelation)
      .mixin(companyMemberRelation)
      .mixin(emailTemplateRelation)
      .mixin(processRelation)
      .mixin(companyRelation)

      // indexes
      .raw(INDEX.agentId)
      .raw(INDEX.companyMemberId)
      .raw(INDEX.emailTemplateId)
      .raw(INDEX.processId)
      .raw(INDEX.companyId)

      // table name
      .map(TABLE_NAME.EMAIL);
  });
});
