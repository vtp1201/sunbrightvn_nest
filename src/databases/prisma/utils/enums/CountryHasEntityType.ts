import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  countryId = 'countryId',
  entityTypeId = 'entityTypeId',
  isActive = 'isActive',
}

export enum COLUMN {
  countryId = 'country_id',
  entityTypeId = 'entity_type_id',
  isActive = 'is_active',
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
  entityType = RELATION_DEFAULT.entityType,
}

export default {
  ATTRIBUTE,
  RELATION,
};
