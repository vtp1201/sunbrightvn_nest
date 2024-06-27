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
  agencyId = `@@index([${ATTRIBUTE.agencyId}])`,
  businessSizeId = `@@index([${ATTRIBUTE.businessSizeId}])`,
  businessStageId = `@@index([${ATTRIBUTE.businessStageId}])`,
  grantSchemeId = `@@index([${ATTRIBUTE.grantSchemeId}])`,
  industryId = `@@index([${ATTRIBUTE.industryId}])`,
  localShareholdingId = `@@index([${ATTRIBUTE.localShareholdingId}])`,
  needsBasedId = `@@index([${ATTRIBUTE.needsBasedId}])`,
  numberEmployeesId = `@@index([${ATTRIBUTE.numberEmployeesId}])`,
  typeId = `@@index([${ATTRIBUTE.typeId}])`,
  yearsOperationId = `@@index([${ATTRIBUTE.yearsOperationId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
