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
  customers = RELATION_DEFAULT.customers,
  businessActivityIndustryClass = RELATION_DEFAULT.businessActivityIndustryClass,
  businessActivities = RELATION_DEFAULT.businessActivities,
}

export default {
  ATTRIBUTE,
  RELATION,
};
