import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  changeRequestId = 'changeRequestId',
  model = 'model',
  fieldName = 'fieldName',
  value = 'value',
  isFee = 'isFee',
  dataType = 'dataType',
  targetId = 'targetId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  changeRequestId = 'change_request_id',
  model = 'model',
  fieldName = 'field_name',
  value = 'value',
  isFee = 'is_fee',
  dataType = 'data_type',
  targetId = 'target_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  changeRequest = RELATION_DEFAULT.changeRequest,
}

const tableName = TABLE_NAME.CHANGE_REQUEST_ITEM;
export enum INDEX_NAME {
  changeRequestId = `"${tableName}_${COLUMN.changeRequestId}_fkey"`,
}

export enum INDEX {
  changeRequestId = `@@index([${ATTRIBUTE.changeRequestId}], map: ${INDEX_NAME.changeRequestId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
