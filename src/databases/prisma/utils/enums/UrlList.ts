import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  value = 'value',
  urlListTypeId = 'urlListTypeId',
  isUrl = 'isUrl',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  value = 'value',
  urlListTypeId = 'url_list_type_id',
  isUrl = 'is_url',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  urlListType = RELATION_DEFAULT.urlListType,
}

const tableName = TABLE_NAME.URL_LIST;
export enum INDEX_NAME {
  urlListTypeId = `"${tableName}_${COLUMN.urlListTypeId}_fkey"`,
}

export enum INDEX {
  urlListTypeId = `@@index([${ATTRIBUTE.urlListTypeId}], map: ${INDEX_NAME.urlListTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
