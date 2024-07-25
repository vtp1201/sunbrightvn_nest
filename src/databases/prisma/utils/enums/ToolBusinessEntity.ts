import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  optionId = 'optionId',
  entityTypeId = 'entityTypeId',
  score = 'score',
  isReject = 'isReject',
  isReset = 'isReset',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  optionId = 'option_id',
  entityTypeId = 'entity_type_id',
  score = 'score',
  isReject = 'is_reject',
  isReset = 'is_reset',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  option = RELATION_DEFAULT.options,
  entityType = RELATION_DEFAULT.entityType,
}

const tableName = TABLE_NAME.TOOL_BUSINESS_ENTITY;
export enum INDEX_NAME {
  optionId = `"${tableName}_${COLUMN.optionId}_fkey"`,
  entityTypeId = `"${tableName}_${COLUMN.entityTypeId}_fkey"`,
}

export enum INDEX {
  optionId = `@@index([${ATTRIBUTE.optionId}], map: ${INDEX_NAME.optionId})`,
  entityTypeId = `@@index([${ATTRIBUTE.entityTypeId}], map: ${INDEX_NAME.entityTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
