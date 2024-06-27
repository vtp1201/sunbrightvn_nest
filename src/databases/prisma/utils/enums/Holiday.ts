import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  day = 'day',
  month = 'month',
  year = 'year',
  date = 'date',
  countryId = 'countryId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  day = 'day',
  month = 'month',
  year = 'year',
  date = 'date',
  countryId = 'country_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
}

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
  INDEX,
};
