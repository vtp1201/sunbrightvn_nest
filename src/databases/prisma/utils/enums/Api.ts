import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  url = 'url',
  apiMethodId = 'apiMethodId',
  note = 'note',
  isRecaptcha = 'isRecaptcha',
  isAuthorization = 'isAuthorization',
  description = 'description',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  url = 'url',
  apiMethodId = 'api_method_id',
  note = 'note',
  isRecaptcha = 'is_recaptcha',
  isAuthorization = 'is_authorization',
  description = 'description',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  apiMethod = RELATION_DEFAULT.apiMethod,
  apiExamples = RELATION_DEFAULT.apiExamples,
  apiHasFields = RELATION_DEFAULT.apiHasFields,
  apiHasGroups = RELATION_DEFAULT.apiHasGroups,
}

const tableName = TABLE_NAME.API;
export enum INDEX_NAME {
  apiMethodId = `"${tableName}_${COLUMN.apiMethodId}_fkey"`,
}
export enum INDEX {
  apiMethodId = `@@index([${ATTRIBUTE.apiMethodId}], map: ${INDEX_NAME.apiMethodId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
