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

export enum RELATION {}
// grantScheme = RELATION_DEFAULT.grantScheme,
// grantTypeAttributeAgency = RELATION_DEFAULT.grantTypeAttributeAgency,
// grantTypeAttributeBusinessSize = RELATION_DEFAULT.grantTypeAttributeBusinessSize,
// grantTypeAttributeBusinessStage = RELATION_DEFAULT.grantTypeAttributeBusinessStage,
// grantTypeAttributeIndustry = RELATION_DEFAULT.grantTypeAttributeIndustry,
// grantTypeAttributeLocalShareholding = RELATION_DEFAULT.grantTypeAttributeLocalShareholding,
// grantTypeAttributeNeedsBased = RELATION_DEFAULT.grantTypeAttributeNeedsBased,
// grantTypeAttributeNumberEmployees = RELATION_DEFAULT.grantTypeAttributeNumberEmployees,
// grantTypeAttributeType = RELATION_DEFAULT.grantTypeAttributeType,
// grantTypeAttributeYearsOperation = RELATION_DEFAULT.grantTypeAttributeYearsOperation,

export enum INDEX {
  agencyId = `@@index([${ATTRIBUTE.agencyId}], map: "fk_grant_scheme_has_grant_type_attribute_agency_idx")`,
  businessSizeId = `@@index([${ATTRIBUTE.businessSizeId}], map: "fk_grant_scheme_has_grant_type_attribute_business_size_idx")`,
  businessStageId = `@@index([${ATTRIBUTE.businessStageId}], map: "fk_grant_scheme_has_grant_type_attribute_business_stage_idx")`,
  grantSchemeId = `@@index([${ATTRIBUTE.grantSchemeId}], map: "fk_grant_scheme_has_grant_type_attribute_grant_scheme_idx")`,
  industryId = `@@index([${ATTRIBUTE.industryId}], map: "fk_grant_scheme_has_grant_type_attribute_industry_idx")`,
  localShareholdingId = `@@index([${ATTRIBUTE.localShareholdingId}], map: "fk_grant_scheme_has_grant_type_attribute_local_shareholding_idx")`,
  needsBasedId = `@@index([${ATTRIBUTE.needsBasedId}], map: "fk_grant_scheme_has_grant_type_attribute_needs_base_idx")`,
  numberEmployeesId = `@@index([${ATTRIBUTE.numberEmployeesId}], map: "fk_grant_scheme_has_grant_type_attribute_number_employees_idx")`,
  typeId = `@@index([${ATTRIBUTE.typeId}], map: "fk_grant_scheme_has_grant_type_attribute_type_idx")`,
  yearsOperationId = `@@index([${ATTRIBUTE.yearsOperationId}], map: "fk_grant_scheme_has_grant_type_attribute_years_operation_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
