import { TABLE_NAME } from '../constants';
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
  agencyForGrantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.agencyForGrantSchemeHasGrantTypeAttributes,
  businessSizeForGrantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.businessSizeForGrantSchemeHasGrantTypeAttributes,
  businessStageForGrantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.businessStageForGrantSchemeHasGrantTypeAttributes,
  grantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.grantSchemeHasGrantTypeAttributes,
  localShareholdingForGrantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.localShareholdingForGrantSchemeHasGrantTypeAttributes,
  needsBasedForGrantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.needsBasedForGrantSchemeHasGrantTypeAttributes,
  numberEmployeesForGrantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.numberEmployeesForGrantSchemeHasGrantTypeAttributes,
  industryForGrantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.industryForGrantSchemeHasGrantTypeAttributes,
  yearsOperationForGrantSchemeHasGrantTypeAttributes = RELATION_DEFAULT.yearsOperationForGrantSchemeHasGrantTypeAttributes,
  parent = RELATION_DEFAULT.parent,
  children = RELATION_DEFAULT.children,
  grantType = RELATION_DEFAULT.grantType,
}

const tableName = TABLE_NAME.GRANT_TYPE_ATTRIBUTE;
export enum INDEX_NAME {
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
  parentId = `"${tableName}_${COLUMN.parentId}_fkey"`,
  grantTypeId = `"${tableName}_${COLUMN.grantTypeId}_fkey"`,
}

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
  parentId = `@@index([${ATTRIBUTE.parentId}], map: ${INDEX_NAME.parentId})`,
  grantTypeId = `@@index([${ATTRIBUTE.grantTypeId}], map: ${INDEX_NAME.grantTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
