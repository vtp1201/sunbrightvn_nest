import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  limitId = 'limitId',
  name = 'name',
  description = 'description',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  limitId = 'limit_id',
  name = 'name',
  description = 'description',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  limit = RELATION_DEFAULT.limit,
}

const tableName = TABLE_NAME.LIMIT_VALUE;
export enum INDEX_NAME {
  limitId = `"${tableName}_${COLUMN.limitId}_fkey"`,
}

export enum INDEX {
  limitId = `@@index([${ATTRIBUTE.limitId}], map: ${INDEX_NAME.limitId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
