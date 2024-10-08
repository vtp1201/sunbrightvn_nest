import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  description = 'description',
  countryId = 'countryId',
  keyFacts = 'keyFacts',
  introduction = 'introduction',
  benefits = 'benefits',
  eligibility = 'eligibility',
  howToApply = 'howToApply',
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  description = 'description',
  countryId = 'country_id',
  keyFacts = 'key_facts',
  introduction = 'introduction',
  benefits = 'benefits',
  eligibility = 'eligibility',
  howToApply = 'how_to_apply',
  updatedTime = COLUMN_DEFAULT.updatedTime,
  createdTime = COLUMN_DEFAULT.createdTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
  grantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributes,
}

const tableName = TABLE_NAME.GRANT_SCHEME;
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
