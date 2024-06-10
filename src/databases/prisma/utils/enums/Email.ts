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

export enum INDEX {
  agentId = `@@index([${ATTRIBUTE.agentId}], map: "fk_ema_agent_id_age_id_hpr1")`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: "fk_ema_company_member_id_com_id_erjh")`,
  emailTemplateId = `@@index([${ATTRIBUTE.emailTemplateId}], map: "fk_ema_email_template_id_ema_id_5exl")`,
  processId = `@@index([${ATTRIBUTE.processId}], map: "fk_ema_process_id_pro_id_gmvr")`,
  companyId = `@@index([${ATTRIBUTE.companyId}], map: "fk_email_company_id_1_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
