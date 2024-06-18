// SyslogEnum.ts

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
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
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
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  apiMethod = RELATION_DEFAULT.apiMethod,
  country = RELATION_DEFAULT.country,
  syslogType = RELATION_DEFAULT.syslogType,
  user = RELATION_DEFAULT.user,
}

export enum INDEX {
  apiMethodId = `@@index([${ATTRIBUTE.apiMethodId}], map: "fk_sys_api_method_id_api_id_8yj3")`,
  countryId = `@@index([${ATTRIBUTE.countryId}], map: "fk_sys_country_id_cou_id_17il")`,
  syslogTypeId = `@@index([${ATTRIBUTE.syslogTypeId}], map: "fk_sys_syslog_type_id_sys_id_cbyy")`,
  userId = `@@index([${ATTRIBUTE.userId}], map: "fk_sys_user_id_use_id_iwew")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
