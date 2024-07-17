import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  apiId = 'apiId',
  body = 'body',
  param = 'param',
  query = 'query',
  apiStatusId = 'apiStatusId',
  response = 'response',
  description = 'description',
  apiGroupId = 'apiGroupId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  apiId = 'api_id',
  body = 'body',
  param = 'param',
  query = 'query',
  apiStatusId = 'api_status_id',
  response = 'response',
  description = 'description',
  apiGroupId = 'api_group_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  apiStatus = RELATION_DEFAULT.apiStatus,
  apiGroup = RELATION_DEFAULT.apiGroup,
  api = RELATION_DEFAULT.api,
  files = RELATION_DEFAULT.files,
}

const tableName = TABLE_NAME.API_EXAMPLE;
export enum INDEX_NAME {
  apiStatusId = `"${tableName}_${COLUMN.apiStatusId}_fkey"`,
  apiGroupId = `"${tableName}_${COLUMN.apiGroupId}_fkey"`,
  apiId = `"${tableName}_${COLUMN.apiId}_fkey"`,
}
export enum INDEX {
  apiStatusId = `@@index([${ATTRIBUTE.apiStatusId}], map: ${INDEX_NAME.apiStatusId})`,
  apiGroupId = `@@index([${ATTRIBUTE.apiGroupId}], map: ${INDEX_NAME.apiGroupId})`,
  apiId = `@@index([${ATTRIBUTE.apiId}], map: ${INDEX_NAME.apiId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
