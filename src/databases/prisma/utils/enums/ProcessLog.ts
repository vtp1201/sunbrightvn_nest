import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  processId = 'processId',
  isFinished = 'isFinished',
  finishedTime = ATTRIBUTE_DEFAULT.finishedTime,
  isLogMail = 'isLogMail',
  isRemind = 'isRemind',
  description = 'description',
  agentId = 'agentId',
  fileTemplateId = 'fileTemplateId',
  companyMemberId = 'companyMemberId',
  belongToCompanyMemberId = 'belongToCompanyMemberId',
  emailTemplateId = 'emailTemplateId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  processId = 'process_id',
  isFinished = 'is_finished',
  finishedTime = COLUMN_DEFAULT.finishedTime,
  isLogMail = 'is_log_mail',
  isRemind = 'is_remind',
  description = 'description',
  agentId = 'agent_id',
  fileTemplateId = 'file_template_id',
  companyMemberId = 'company_member_id',
  belongToCompanyMemberId = 'belong_to_company_member_id',
  emailTemplateId = 'email_template_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  agent = RELATION_DEFAULT.agent,
  belongToCompanyMember = RELATION_DEFAULT.belongToCompanyMember,
  companyMember = RELATION_DEFAULT.companyMember,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
  process = RELATION_DEFAULT.process,
}

export enum INDEX {
  agentId = `@@index([${ATTRIBUTE.agentId}])`,
  belongToCompanyMemberId = `@@index([${ATTRIBUTE.belongToCompanyMemberId}])`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}])`,
  fileTemplateId = `@@index([${ATTRIBUTE.fileTemplateId}])`,
  processId = `@@index([${ATTRIBUTE.processId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
