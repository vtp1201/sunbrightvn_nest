import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  entityTypeId = 'entityTypeId',
  companySuffixId = 'companySuffixId',
}

export enum COLUMN {
  entityTypeId = 'entity_type_id',
  companySuffixId = 'company_suffix_id',
}

export enum RELATION {
  companySuffix = RELATION_DEFAULT.companySuffix,
  entityType = RELATION_DEFAULT.entityType,
}

export enum INDEX {
  entityTypeId = `@@index([${ATTRIBUTE.entityTypeId}])`,
  companySuffixId = `@@index([${ATTRIBUTE.companySuffixId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
