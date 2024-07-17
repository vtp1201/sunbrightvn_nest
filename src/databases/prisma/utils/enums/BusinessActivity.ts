import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  countryId = 'countryId',
  sicCode = 'sicCode',
  description = 'description',
  businessActivityIndustryId = 'businessActivityIndustryId',
  labelIds = 'labelIds',
  isCommon = 'isCommon',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  countryId = 'country_id',
  sicCode = 'sic_code',
  description = 'description',
  businessActivityIndustryId = 'business_activity_industry_id',
  labelIds = 'label_ids',
  isCommon = 'is_common',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  businessActivityIndustry = RELATION_DEFAULT.businessActivityIndustry,
  country = RELATION_DEFAULT.country,
  companies = RELATION_DEFAULT.companies,
  companyMembers = RELATION_DEFAULT.companyMembers,
}

const tableName = TABLE_NAME.BUSINESS_ACTIVITY;
export enum INDEX_NAME {
  businessActivityIndustryId = `"${tableName}_${COLUMN.businessActivityIndustryId}_fkey"`,
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
}

export enum INDEX {
  businessActivityIndustryId = `@@index([${ATTRIBUTE.businessActivityIndustryId}], map: ${INDEX_NAME.businessActivityIndustryId})`,
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
