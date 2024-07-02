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

export default {
  ATTRIBUTE,
  RELATION,
};
