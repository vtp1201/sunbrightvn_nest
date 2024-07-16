import { createModel } from 'schemix';

import {
  email,
  emailTemplate,
  emailTemplateHasReceiver,
  emailTriggerHasProcess,
  emailType,
  processStep,
} from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/EmailTemplate';

export default createModel(MODEL_NAME.EMAIL_TEMPLATE, (EmailTemplateModel) => {
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
  const emailsRelation = oneToMany({
    model: email,
    relation: RELATION.emails,
  });
  const emailTypeRelation = oneToOne({
    attribute: ATTRIBUTE.emailTypeId,
    model: emailType,
    relation: RELATION.emailType,
    option: { optional: true },
  });
  const nextEmailTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.nextEmailTemplateId,
    model: emailTemplate,
    relation: RELATION.nextEmailTemplate,
    isNeedName: true,
    option: { optional: true },
  });
  const otherEmailTemplatesRelation = oneToMany({
    model: emailTemplate,
    relation: RELATION.otherEmailTemplates,
    fromRelation: RELATION.nextEmailTemplate,
  });
  const processStepRelation = oneToOne({
    attribute: ATTRIBUTE.processStepId,
    model: processStep,
    relation: RELATION.processStep,
    option: { optional: true },
  });
  const emailTemplateHasReceiversRelation = oneToMany({
    model: emailTemplateHasReceiver,
    relation: RELATION.emailTemplateHasReceivers,
  });
  const emailTriggerHasProcessesRelation = oneToMany({
    model: emailTriggerHasProcess,
    relation: RELATION.emailTriggerHasProcesses,
  });

  // defined Model
  process.nextTick(() => {
    EmailTemplateModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.previewText, {
        map: COLUMN.previewText,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.path, {
        map: COLUMN.path,
        optional: true,
        raw: RAW_STRING.LENGTH_200,
      })
      .int(ATTRIBUTE.preTime, {
        map: COLUMN.preTime,
        optional: true,
      })
      .int(ATTRIBUTE.nextEmailTemplateId, {
        map: COLUMN.nextEmailTemplateId,
        optional: true,
      })
      .int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
        optional: true,
      })
      .int(ATTRIBUTE.emailTypeId, {
        map: COLUMN.emailTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.maxTimeSend, {
        map: COLUMN.maxTimeSend,
        optional: true,
      })
      .boolean(ATTRIBUTE.isEmailRemind, {
        map: COLUMN.isEmailRemind,
        default: false,
      })
      .json(ATTRIBUTE.dataViewTables, {
        map: COLUMN.dataViewTables,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(emailsRelation)
      .mixin(emailTypeRelation)
      .mixin(nextEmailTemplateRelation)
      .mixin(otherEmailTemplatesRelation)
      .mixin(processStepRelation)
      .mixin(emailTemplateHasReceiversRelation)
      .mixin(emailTriggerHasProcessesRelation)

      // indexes
      // .raw(INDEX.emailTypeId)
      // .raw(INDEX.nextEmailTemplateId)
      // .raw(INDEX.processStepId)

      // table name
      .map(TABLE_NAME.EMAIL_TEMPLATE);
  });
});
