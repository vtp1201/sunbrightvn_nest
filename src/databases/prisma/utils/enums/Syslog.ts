import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  apiUrl = 'apiUrl',
  userId = 'userId',
  syslogTypeId = 'syslogTypeId',
  username = 'username',
  bodyReq = 'bodyReq',
  apiMethodId = 'apiMethodId',
  relevantLink = 'relevantLink',
  ipAddress = 'ipAddress',
  countryId = 'countryId',
  customerId = 'customerId',
  orderId = 'orderId',
  taskId = 'taskId',
  status = 'status',
  host = 'host',
  referer = 'referer',
  userAgent = 'userAgent',
  method = 'method',
  tokenId = 'tokenId',
  isError = 'isError',
  isUnExpectedError = 'isUnExpectedError',
  errMessage = 'errMessage',
  errStackTrace = 'errStackTrace',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
}

export enum COLUMN {
  id = 'id',
  apiUrl = 'api_url',
  userId = 'user_id',
  syslogTypeId = 'syslog_type_id',
  username = 'username',
  bodyReq = 'body_req',
  apiMethodId = 'api_method_id',
  relevantLink = 'relevant_link',
  ipAddress = 'ip_address',
  countryId = 'country_id',
  customerId = 'customer_id',
  orderId = 'order_id',
  taskId = 'task_id',
  status = 'status',
  host = 'host',
  referer = 'referer',
  userAgent = 'user_agent',
  method = 'method',
  tokenId = 'token_id',
  isError = 'is_error',
  isUnExpectedError = 'is_un_expected_error',
  errMessage = 'err_message',
  errStackTrace = 'err_stack_trace',
  createdTime = COLUMN_DEFAULT.createdTime,
}

export enum RELATION {
  apiMethod = RELATION_DEFAULT.apiMethod,
  country = RELATION_DEFAULT.country,
  syslogType = RELATION_DEFAULT.syslogType,
  user = RELATION_DEFAULT.user,
}

const tableName = TABLE_NAME.SYSLOG;
export enum INDEX_NAME {
  apiMethodId = `"${tableName}_${COLUMN.apiMethodId}_fkey"`,
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
  syslogTypeId = `"${tableName}_${COLUMN.syslogTypeId}_fkey"`,
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
}

export enum INDEX {
  apiMethodId = `@@index([${ATTRIBUTE.apiMethodId}], map: ${INDEX_NAME.apiMethodId})`,
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
  syslogTypeId = `@@index([${ATTRIBUTE.syslogTypeId}], map: ${INDEX_NAME.syslogTypeId})`,
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
