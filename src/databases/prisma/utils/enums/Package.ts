import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  serviceTypeId = 'serviceTypeId',
  packageTypeId = 'packageTypeId',
  countryId = 'countryId',
  websiteId = 'websiteId',
  entityTypeId = 'entityTypeId',
  name = 'name',
  description = 'description',
  xeroItemId = 'xeroItemId',
  xeroItemCode = 'xeroItemCode',
  packageGroupId = 'packageGroupId',
  packageAnnualId = 'packageAnnualId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  serviceTypeId = 'service_type_id',
  packageTypeId = 'package_type_id',
  countryId = 'country_id',
  websiteId = 'website_id',
  entityTypeId = 'entity_type_id',
  name = 'name',
  description = 'description',
  xeroItemId = 'xero_item_id',
  xeroItemCode = 'xero_item_code',
  packageGroupId = 'package_group_id',
  packageAnnualId = 'package_annual_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  customers = RELATION_DEFAULT.customers,
  orderItems = RELATION_DEFAULT.orderItems,
  packageAnnual = RELATION_DEFAULT.packageAnnual,
  belongPackageAnnuals = RELATION_DEFAULT.belongPackageAnnuals,
  country = RELATION_DEFAULT.country,
  entityType = RELATION_DEFAULT.entityType,
  packageGroup = RELATION_DEFAULT.packageGroup,
  packageType = RELATION_DEFAULT.packageType,
  serviceType = RELATION_DEFAULT.serviceType,
  website = RELATION_DEFAULT.website,
  packageHasServices = RELATION_DEFAULT.packageHasServices,
}

export enum INDEX {
  packageAnnualId = `@@index([${ATTRIBUTE.packageAnnualId}])`,
  countryId = `@@index([${ATTRIBUTE.countryId}])`,
  entityTypeId = `@@index([${ATTRIBUTE.entityTypeId}])`,
  packageGroupId = `@@index([${ATTRIBUTE.packageGroupId}])`,
  packageTypeId = `@@index([${ATTRIBUTE.packageTypeId}])`,
  serviceTypeId = `@@index([${ATTRIBUTE.serviceTypeId}])`,
  websiteId = `@@index([${ATTRIBUTE.websiteId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
