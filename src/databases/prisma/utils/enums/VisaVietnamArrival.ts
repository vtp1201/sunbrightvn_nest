import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  countryId = 'countryId',
  dayFree = 'dayFree',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  countryId = 'country_id',
  dayFree = 'day_free',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {}

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
