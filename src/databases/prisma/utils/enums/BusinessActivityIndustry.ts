import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  countryId = 'country_id',
  parentId = 'parentId',
  parentIds = 'parentIds',
  businessActivityIndustryClassId = 'businessActivityIndustryClassId',
  sicCode = 'sicCode',
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  countryId = 'country_id',
  parentId = 'parent_id',
  parentIds = 'parent_ids',
  businessActivityIndustryClassId = 'business_activity_industry_class_id',
  sicCode = 'sic_code',
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
  customers = RELATION_DEFAULT.customers,
  businessActivityIndustryClass = RELATION_DEFAULT.businessActivityIndustryClass,
  businessActivities = RELATION_DEFAULT.businessActivities,
}

const tableName = TABLE_NAME.BUSINESS_ACTIVITY_INDUSTRY;
export enum INDEX_NAME {
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
  businessActivityIndustryClassId = `"${tableName}_business_activity_industry_class_fkey"`, // trường hợp đặc biệt index name phải bé hơn hoặc bằng 64 ký tự
}

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
  businessActivityIndustryClassId = `@@index([${ATTRIBUTE.businessActivityIndustryClassId}], map: ${INDEX_NAME.businessActivityIndustryClassId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
