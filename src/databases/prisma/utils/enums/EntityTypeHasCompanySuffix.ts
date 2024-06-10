import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

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
  companySuffixId = `@@index([${ATTRIBUTE.companySuffixId}], map: "fk_entity_type_has_company_suffix_company_suffix1_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
