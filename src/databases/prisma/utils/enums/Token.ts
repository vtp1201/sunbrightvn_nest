import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  userId = 'userId',
  accessToken = 'accessToken',
  accessTokenExp = 'accessTokenExp',
  accessTokenIat = 'accessTokenIat',
  refreshToken = 'refreshToken',
  refreshTokenExp = 'refreshTokenExp',
  refreshTokenIat = 'refreshTokenIat',
  scope = 'scope',
  tokenType = 'tokenType',
  xeroTokenType = 'xeroTokenType',
  xeroIdToken = 'xeroIdToken',
  xeroSessionState = 'xeroSessionState',
  websiteId = 'websiteId',
  taskId = 'taskId',
  agentId = 'agentId',
  companyMemberId = 'companyMemberId',
  fileTemplateId = 'fileTemplateId',
  belongToCompanyMemberId = 'belongToCompanyMemberId',
  ipAddress = 'ipAddress',
  countRequest = 'countRequest',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
}

export enum COLUMN {
  id = 'id',
  userId = 'user_id',
  accessToken = 'access_token',
  accessTokenExp = 'access_token_exp',
  accessTokenIat = 'access_token_iat',
  refreshToken = 'refresh_token',
  refreshTokenExp = 'refresh_token_exp',
  refreshTokenIat = 'refresh_token_iat',
  scope = 'scope',
  tokenType = 'token_type',
  xeroTokenType = 'xero_token_type',
  xeroIdToken = 'xero_id_token',
  xeroSessionState = 'xero_session_state',
  websiteId = 'website_id',
  taskId = 'task_id',
  agentId = 'agent_id',
  companyMemberId = 'company_member_id',
  fileTemplateId = 'file_template_id',
  belongToCompanyMemberId = 'belong_to_company_member_id',
  ipAddress = 'ip_address',
  countRequest = 'count_request',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
}

export enum RELATION {
  agent = RELATION_DEFAULT.agent,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
  task = RELATION_DEFAULT.task,
  user = RELATION_DEFAULT.user,
  website = RELATION_DEFAULT.website,
}

export enum INDEX {
  agentId = `@@index([${ATTRIBUTE.agentId}], map: "fk_tok_agent_id_age_id_2cha")`,
  belongToCompanyMemberId = `@@index([${ATTRIBUTE.belongToCompanyMemberId}], map: "fk_tok_belong_to_company_member_id_com_id_9mf5")`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: "fk_tok_company_member_id_com_id_lys")`,
  fileTemplateId = `@@index([${ATTRIBUTE.fileTemplateId}], map: "fk_tok_file_template_id_fil_id_g0lx")`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: "fk_tok_task_id_tas_id_g7px")`,
  userId = `@@index([${ATTRIBUTE.userId}], map: "fk_tok_user_id_use_id_bunm")`,
  websiteId = `@@index([${ATTRIBUTE.websiteId}], map: "fk_tok_website_id_web_id_4k48")`,
  accessToken = `@@index([${ATTRIBUTE.accessToken}])`,
  refreshToken = `@@index([${ATTRIBUTE.refreshToken}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
