import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  description = 'description',
  previewText = 'previewText',
  path = 'path',
  preTime = 'preTime',
  nextEmailTemplateId = 'nextEmailTemplateId',
  processStepId = 'processStepId',
  isEmailRemind = 'isEmailRemind',
  maxTimeSend = 'maxTimeSend',
  emailTypeId = 'emailTypeId',
  dataViewTables = 'dataViewTables',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  description = 'description',
  previewText = 'preview_text',
  path = 'path',
  preTime = 'pre_time',
  nextEmailTemplateId = 'next_email_template_id',
  processStepId = 'process_step_id',
  isEmailRemind = 'is_email_remind',
  maxTimeSend = 'max_time_send',
  emailTypeId = 'email_type_id',
  dataViewTables = 'data_view_tables',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  emails = RELATION_DEFAULT.emails,
  emailType = RELATION_DEFAULT.emailType,
  nextEmailTemplate = RELATION_DEFAULT.nextEmailTemplate,
  otherEmailTemplates = RELATION_DEFAULT.otherEmailTemplates,
  processStep = RELATION_DEFAULT.processStep,
  emailTemplateHasReceivers = RELATION_DEFAULT.emailTemplateHasReceivers,
  emailTriggerHasProcesses = RELATION_DEFAULT.emailTriggerHasProcesses,
}

const tableName = TABLE_NAME.EMAIL_TEMPLATE;
export enum INDEX_NAME {
  emailTypeId = `"${tableName}_${COLUMN.emailTypeId}_fkey"`,
  nextEmailTemplateId = `"${tableName}_${COLUMN.nextEmailTemplateId}_fkey"`,
  processStepId = `"${tableName}_${COLUMN.processStepId}_fkey"`,
}

export enum INDEX {
  emailTypeId = `@@index([${ATTRIBUTE.emailTypeId}], map: ${INDEX_NAME.emailTypeId})`,
  nextEmailTemplateId = `@@index([${ATTRIBUTE.nextEmailTemplateId}], map: ${INDEX_NAME.nextEmailTemplateId})`,
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: ${INDEX_NAME.processStepId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
