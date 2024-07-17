import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  apiId = 'apiId',
  apiGroupId = 'apiGroupId',
  description = 'description',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  apiId = 'api_id',
  apiGroupId = 'api_group_id',
  description = 'description',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  api = RELATION_DEFAULT.api,
  apiGroup = RELATION_DEFAULT.apiGroup,
}

const tableName = TABLE_NAME.API_HAS_GROUP;
export enum INDEX_NAME {
  apiGroupId = `"${tableName}_${COLUMN.apiGroupId}_fkey"`,
  apiId = `"${tableName}_${COLUMN.apiId}_fkey"`,
}
export enum INDEX {
  apiGroupId = `@@index([${ATTRIBUTE.apiGroupId}], map: ${INDEX_NAME.apiGroupId})`,
  apiId = `@@index([${ATTRIBUTE.apiId}], map: ${INDEX_NAME.apiId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
