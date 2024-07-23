import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  emailTemplateId = 'emailTemplateId',
  subject = 'subject',
  agentId = 'agentId',
  processId = 'processId',
  order = 'order',
  timeToSend = 'timeToSend',
  description = 'description',
  isCompleted = 'isCompleted',
  isError = 'isError',
  emailTo = 'emailTo',
  emailFrom = 'emailFrom',
  emailCc = 'emailCc',
  isRunning = 'isRunning',
  attachments = 'attachments',
  companyMemberId = 'companyMemberId',
  companyId = 'companyId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  emailTemplateId = 'email_template_id',
  subject = 'subject',
  agentId = 'agent_id',
  processId = 'process_id',
  order = 'order',
  timeToSend = 'time_to_send',
  description = 'description',
  isCompleted = 'is_completed',
  isError = 'is_error',
  emailTo = 'email_to',
  emailFrom = 'email_from',
  emailCc = 'email_cc',
  isRunning = 'is_running',
  attachments = 'attachments',
  companyMemberId = 'company_member_id',
  companyId = 'company_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  agent = RELATION_DEFAULT.agent,
  companyMember = RELATION_DEFAULT.companyMember,
  emailTemplate = RELATION_DEFAULT.emailTemplate,
  process = RELATION_DEFAULT.process,
  company = RELATION_DEFAULT.company,
  emailTemplateHasReceivers = RELATION_DEFAULT.emailTemplateHasReceivers,
}

const tableName = TABLE_NAME.EMAIL;
export enum INDEX_NAME {
  agentId = `"${tableName}_${COLUMN.agentId}_fkey"`,
  companyMemberId = `"${tableName}_${COLUMN.companyMemberId}_fkey"`,
  emailTemplateId = `"${tableName}_${COLUMN.emailTemplateId}_fkey"`,
  processId = `"${tableName}_${COLUMN.processId}_fkey"`,
  companyId = `"${tableName}_${COLUMN.companyId}_fkey"`,
}

export enum INDEX {
  agentId = `@@index([${ATTRIBUTE.agentId}], map: ${INDEX_NAME.agentId})`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: ${INDEX_NAME.companyMemberId})`,
  emailTemplateId = `@@index([${ATTRIBUTE.emailTemplateId}], map: ${INDEX_NAME.emailTemplateId})`,
  processId = `@@index([${ATTRIBUTE.processId}], map: ${INDEX_NAME.processId})`,
  companyId = `@@index([${ATTRIBUTE.companyId}], map: ${INDEX_NAME.companyId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
