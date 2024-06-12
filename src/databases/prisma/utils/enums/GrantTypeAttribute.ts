import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  grantTypeId = 'grantTypeId',
  name = 'name',
  description = 'description',
  parentId = 'parentId',
  countryId = 'countryId',
  grantTypeAttributeCol = 'grantTypeAttributeCol',
  isDisabled = 'isDisabled',
  order = 'order',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  grantTypeId = 'grant_type_id',
  name = 'name',
  description = 'description',
  parentId = 'parent_id',
  countryId = 'country_id',
  grantTypeAttributeCol = 'grant_type_attribute_col',
  isDisabled = 'is_disabled',
  order = 'order',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
}
// grantSchemeHasGrantTypeAttributeAgency = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributeAgency,
// grantSchemeHasGrantTypeAttributeBusinessSize = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributeBusinessSize,
// grantSchemeHasGrantTypeAttributeBusinessStage = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributeBusinessStage,
// grantSchemeHasGrantTypeAttributeIndustry = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributeIndustry,
// grantSchemeHasGrantTypeAttributeLocalShareholding = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributeLocalShareholding,
// grantSchemeHasGrantTypeAttributeNeedsBased = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributeNeedsBased,
// grantSchemeHasGrantTypeAttributeNumberEmployees = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributeNumberEmployees,
// grantSchemeHasGrantTypeAttributeType = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributeType,
// grantSchemeHasGrantTypeAttributeYearsOperation = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributeYearsOperation,
// grantTypeAttribute = RELATION_DEFAULT.grantTypeAttribute,
// otherGrantTypeAttribute = RELATION_DEFAULT.otherGrantTypeAttribute,
// grantType = RELATION_DEFAULT.grantType,

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}], map: "fk_grant_type_attribute_country_idx")`,
  parentId = `@@index([${ATTRIBUTE.parentId}], map: "fk_grant_type_attribute_self_idx")`,
  grantTypeId = `@@index([${ATTRIBUTE.grantTypeId}], map: "fk_grant_type_attribute_type_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
