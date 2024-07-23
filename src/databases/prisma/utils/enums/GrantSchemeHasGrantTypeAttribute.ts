import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  grantSchemeId = 'grantSchemeId',
  needsBasedId = 'needsBasedId',
  industryId = 'industryId',
  businessStageId = 'businessStageId',
  yearsOperationId = 'yearsOperationId',
  businessSizeId = 'businessSizeId',
  localShareholdingId = 'localShareholdingId',
  numberEmployeesId = 'numberEmployeesId',
  typeId = 'typeId',
  agencyId = 'agencyId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  grantSchemeId = 'grant_scheme_id',
  needsBasedId = 'needs_based_id',
  industryId = 'industry_id',
  businessStageId = 'business_stage_id',
  yearsOperationId = 'years_operation_id',
  businessSizeId = 'business_size_id',
  localShareholdingId = 'local_shareholding_id',
  numberEmployeesId = 'number_employees_id',
  typeId = 'type_id',
  agencyId = 'agency_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  grantScheme = RELATION_DEFAULT.grantScheme,
  grantTypeAttributeAgency = RELATION_DEFAULT.grantTypeAttributeAgency,
  grantTypeAttributeBusinessSize = RELATION_DEFAULT.grantTypeAttributeBusinessSize,
  grantTypeAttributeBusinessStage = RELATION_DEFAULT.grantTypeAttributeBusinessStage,
  grantTypeAttributeIndustry = RELATION_DEFAULT.grantTypeAttributeIndustry,
  grantTypeAttributeLocalShareholding = RELATION_DEFAULT.grantTypeAttributeLocalShareholding,
  grantTypeAttributeNeedsBased = RELATION_DEFAULT.grantTypeAttributeNeedsBased,
  grantTypeAttributeNumberEmployees = RELATION_DEFAULT.grantTypeAttributeNumberEmployees,
  grantTypeAttributeType = RELATION_DEFAULT.grantTypeAttributeType,
  grantTypeAttributeYearsOperation = RELATION_DEFAULT.grantTypeAttributeYearsOperation,
}

const tableName = TABLE_NAME.GRANT_SCHEME_HAS_GRANT_TYPE_ATTRIBUTE;
export enum INDEX_NAME {
  agencyId = `"${tableName}_${COLUMN.agencyId}_fkey"`,
  businessSizeId = `"${tableName}_${COLUMN.businessSizeId}_fkey"`,
  businessStageId = `"${tableName}_${COLUMN.businessStageId}_fkey"`,
  grantSchemeId = `"${tableName}_${COLUMN.grantSchemeId}_fkey"`,
  industryId = `"${tableName}_${COLUMN.industryId}_fkey"`,
  localShareholdingId = `"${tableName}_${COLUMN.localShareholdingId}_fkey"`,
  needsBasedId = `"${tableName}_${COLUMN.needsBasedId}_fkey"`,
  numberEmployeesId = `"${tableName}_${COLUMN.numberEmployeesId}_fkey"`,
  typeId = `"${tableName}_${COLUMN.typeId}_fkey"`,
  yearsOperationId = `"${tableName}_${COLUMN.yearsOperationId}_fkey"`,
}

export enum INDEX {
  agencyId = `@@index([${ATTRIBUTE.agencyId}], map: ${INDEX_NAME.agencyId})`,
  businessSizeId = `@@index([${ATTRIBUTE.businessSizeId}], map: ${INDEX_NAME.businessSizeId})`,
  businessStageId = `@@index([${ATTRIBUTE.businessStageId}], map: ${INDEX_NAME.businessStageId})`,
  grantSchemeId = `@@index([${ATTRIBUTE.grantSchemeId}], map: ${INDEX_NAME.grantSchemeId})`,
  industryId = `@@index([${ATTRIBUTE.industryId}], map: ${INDEX_NAME.industryId})`,
  localShareholdingId = `@@index([${ATTRIBUTE.localShareholdingId}], map: ${INDEX_NAME.localShareholdingId})`,
  needsBasedId = `@@index([${ATTRIBUTE.needsBasedId}], map: ${INDEX_NAME.needsBasedId})`,
  numberEmployeesId = `@@index([${ATTRIBUTE.numberEmployeesId}], map: ${INDEX_NAME.numberEmployeesId})`,
  typeId = `@@index([${ATTRIBUTE.typeId}], map: ${INDEX_NAME.typeId})`,
  yearsOperationId = `@@index([${ATTRIBUTE.yearsOperationId}], map: ${INDEX_NAME.yearsOperationId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
