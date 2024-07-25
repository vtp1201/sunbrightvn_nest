import { TABLE_NAME } from '../constants';
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
  companyMember = RELATION_DEFAULT.companyMember,
  belongToCompanyMember = RELATION_DEFAULT.belongToCompanyMember,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
  task = RELATION_DEFAULT.task,
  user = RELATION_DEFAULT.user,
  website = RELATION_DEFAULT.website,
}

const tableName = TABLE_NAME.TOKEN;
export enum INDEX_NAME {
  agentId = `"${tableName}_${COLUMN.agentId}_fkey"`,
  belongToCompanyMemberId = `"${tableName}_${COLUMN.belongToCompanyMemberId}_fkey"`,
  companyMemberId = `"${tableName}_${COLUMN.companyMemberId}_fkey"`,
  fileTemplateId = `"${tableName}_${COLUMN.fileTemplateId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
  websiteId = `"${tableName}_${COLUMN.websiteId}_fkey"`,
  accessToken = `"${tableName}_${COLUMN.accessToken}_fkey"`,
  refreshToken = `"${tableName}_${COLUMN.refreshToken}_fkey"`,
}

export enum INDEX {
  agentId = `@@index([${ATTRIBUTE.agentId}], map: ${INDEX_NAME.agentId})`,
  belongToCompanyMemberId = `@@index([${ATTRIBUTE.belongToCompanyMemberId}], map: ${INDEX_NAME.belongToCompanyMemberId})`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: ${INDEX_NAME.companyMemberId})`,
  fileTemplateId = `@@index([${ATTRIBUTE.fileTemplateId}], map: ${INDEX_NAME.fileTemplateId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
  websiteId = `@@index([${ATTRIBUTE.websiteId}], map: ${INDEX_NAME.websiteId})`,
  accessToken = `@@index([${ATTRIBUTE.accessToken}], map: ${INDEX_NAME.accessToken})`,
  refreshToken = `@@index([${ATTRIBUTE.refreshToken}], map: ${INDEX_NAME.refreshToken})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
