import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  countryId = 'countryId',
  value = 'value',
  targetTypeId = 'targetTypeId',
  dateOfTarget = 'dateOfTarget',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  countryId = 'country_id',
  value = 'value',
  targetTypeId = 'target_type_id',
  dateOfTarget = 'date_of_target',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
}

const tableName = TABLE_NAME.TARGET;
export enum INDEX_NAME {
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
}

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
