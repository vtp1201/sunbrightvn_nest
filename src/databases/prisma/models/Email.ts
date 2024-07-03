import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Email';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import {
  agent,
  company,
  companyMember,
  emailTemplate,
  emailTemplateHasReceiver,
  Process,
} from '.';

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
    option: { optional: true },
  });
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    model: companyMember,
    relation: RELATION.companyMember,
    option: { optional: true },
  });
  const emailTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.emailTemplateId,
    model: emailTemplate,
    relation: RELATION.emailTemplate,
    option: { optional: true },
  });
  const processRelation = oneToOne({
    attribute: ATTRIBUTE.processId,
    model: Process,
    relation: RELATION.process,
    option: { optional: true },
  });
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
    option: { optional: true },
  });
  const emailTemplateHasReceiversRelation = oneToMany({
    model: emailTemplateHasReceiver,
    relation: RELATION.emailTemplateHasReceivers,
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
      .mixin(emailTemplateHasReceiversRelation)

      // indexes
      // .raw(INDEX.agentId)
      // .raw(INDEX.companyMemberId)
      // .raw(INDEX.emailTemplateId)
      // .raw(INDEX.processId)
      // .raw(INDEX.companyId)

      // table name
      .map(TABLE_NAME.EMAIL);
  });
});
