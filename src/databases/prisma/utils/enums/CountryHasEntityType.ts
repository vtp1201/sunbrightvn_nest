import { TABLE_NAME } from '../constants';
import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  countryId = 'countryId',
  entityTypeId = 'entityTypeId',
  isActive = 'isActive',
}

export enum COLUMN {
  id = 'id',
  countryId = 'country_id',
  entityTypeId = 'entity_type_id',
  isActive = 'is_active',
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
  entityType = RELATION_DEFAULT.entityType,
  fileTemplates = RELATION_DEFAULT.fileTemplates,
}

const tableName = TABLE_NAME.COUNTRY_HAS_ENTITY_TYPE;
export enum INDEX_NAME {
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
  entityTypeId = `"${tableName}_${COLUMN.entityTypeId}_fkey"`,
}

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
  entityTypeId = `@@index([${ATTRIBUTE.entityTypeId}], map: ${INDEX_NAME.entityTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
