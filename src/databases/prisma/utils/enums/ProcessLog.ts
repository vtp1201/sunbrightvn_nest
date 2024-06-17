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
  agent = 'agent',
  companyMemberBelongTo = 'company_member_process_log_belong_to_company_member_idTocompany_member',
  companyMember = 'company_member_process_log_company_member_idTocompany_member',
  fileTemplate = 'file_template',
  process = 'process',
}

export enum INDEX {
  agentId = `@@index([${ATTRIBUTE.agentId}], map: "fk_pro_agent_id_age_id_6pr9")`,
  belongToCompanyMemberId = `@@index([${ATTRIBUTE.belongToCompanyMemberId}], map: "fk_pro_belong_to_company_member_id_com_id_f9aw")`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: "fk_pro_company_member_id_com_id_e3mj")`,
  fileTemplateId = `@@index([${ATTRIBUTE.fileTemplateId}], map: "fk_pro_file_template_id_fil_id_c3wc")`,
  processId = `@@index([${ATTRIBUTE.processId}], map: "fk_pro_process_id_pro_id_1wjq")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
