// ServiceEnum.ts
import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  serviceTypeId = 'serviceTypeId',
  websiteId = 'websiteId',
  visaTypeId = 'visaTypeId',
  visaPurposeId = 'visaPurposeId',
  carTypeId = 'carTypeId',
  carSeatId = 'carSeatId',
  airportId = 'airportId',
  serviceUnitId = 'serviceUnitId',
  name = 'name',
  description = 'description',
  xeroItemId = 'xeroItemId',
  xeroItemCode = 'xeroItemCode',
  uuid = 'uuid',
  xeroAccountId = 'xeroAccountId',
  isActive = 'isActive',
  isServiceOutsideCompany = 'isServiceOutsideCompany',
  isDisplayed = 'isDisplayed',
  isAttachIncorp = 'isAttachIncorp',
  quantity = 'quantity',
  upgradeServiceId = 'upgradeServiceId',
  discountServiceId = 'discountServiceId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  serviceTypeId = 'service_type_id',
  websiteId = 'website_id',
  visaTypeId = 'visa_type_id',
  visaPurposeId = 'visa_purpose_id',
  carTypeId = 'car_type_id',
  carSeatId = 'car_seat_id',
  airportId = 'airport_id',
  serviceUnitId = 'service_unit_id',
  name = 'name',
  description = 'description',
  xeroItemId = 'xero_item_id',
  xeroItemCode = 'xero_item_code',
  uuid = 'uuid',
  xeroAccountId = 'xero_account_id',
  isActive = 'is_active',
  isServiceOutsideCompany = 'is_service_outside_company',
  isDisplayed = 'is_displayed',
  isAttachIncorp = 'is_attach_incorp',
  quantity = 'quantity',
  upgradeServiceId = 'upgrade_service_id',
  discountServiceId = 'discount_service_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  companyEvents = RELATION_DEFAULT.companyEvents,
  countryHasServices = RELATION_DEFAULT.countryHasServices,
  fees = RELATION_DEFAULT.fees,
  orderItems = RELATION_DEFAULT.orderItems,
  packageHasServices = RELATION_DEFAULT.packageHasServices,
  discountService = RELATION_DEFAULT.discountService,
  discountForServices = RELATION_DEFAULT.discountForServices,
  airport = RELATION_DEFAULT.airport,
  carSeat = RELATION_DEFAULT.carSeat,
  carType = RELATION_DEFAULT.carType,
  serviceType = RELATION_DEFAULT.serviceType,
  serviceUnit = RELATION_DEFAULT.serviceUnit,
  visaPurpose = RELATION_DEFAULT.visaPurpose,
  visaType = RELATION_DEFAULT.visaType,
  website = RELATION_DEFAULT.website,
  upgradeService = RELATION_DEFAULT.upgradeService,
  upgradeForServices = RELATION_DEFAULT.upgradeForServices,
  xeroAccount = RELATION_DEFAULT.xeroAccount,
  companyMemberTypes = RELATION_DEFAULT.companyMemberTypes,
  companySuffixes = RELATION_DEFAULT.companySuffixes,
  serviceHasFileTemplates = RELATION_DEFAULT.serviceHasFileTemplates,
  subscriptions = RELATION_DEFAULT.subscriptions,
}

const tableName = TABLE_NAME.SERVICE;
export enum INDEX_NAME {
  discountServiceId = `"${tableName}_${COLUMN.discountServiceId}_fkey"`,
  airportId = `"${tableName}_${COLUMN.airportId}_fkey"`,
  carSeatId = `"${tableName}_${COLUMN.carSeatId}_fkey"`,
  carTypeId = `"${tableName}_${COLUMN.carTypeId}_fkey"`,
  serviceTypeId = `"${tableName}_${COLUMN.serviceTypeId}_fkey"`,
  serviceUnitId = `"${tableName}_${COLUMN.serviceUnitId}_fkey"`,
  visaPurposeId = `"${tableName}_${COLUMN.visaPurposeId}_fkey"`,
  visaTypeId = `"${tableName}_${COLUMN.visaTypeId}_fkey"`,
  websiteId = `"${tableName}_${COLUMN.websiteId}_fkey"`,
  xeroAccountId = `"${tableName}_${COLUMN.xeroAccountId}_fkey"`,
  upgradeServiceId = `"${tableName}_${COLUMN.upgradeServiceId}_fkey"`,
}

export enum INDEX {
  discountServiceId = `@@index([${ATTRIBUTE.discountServiceId}], map: ${INDEX_NAME.discountServiceId})`,
  airportId = `@@index([${ATTRIBUTE.airportId}], map: ${INDEX_NAME.airportId})`,
  carSeatId = `@@index([${ATTRIBUTE.carSeatId}], map: ${INDEX_NAME.carSeatId})`,
  carTypeId = `@@index([${ATTRIBUTE.carTypeId}], map: ${INDEX_NAME.carTypeId})`,
  serviceTypeId = `@@index([${ATTRIBUTE.serviceTypeId}], map: ${INDEX_NAME.serviceTypeId})`,
  serviceUnitId = `@@index([${ATTRIBUTE.serviceUnitId}], map: ${INDEX_NAME.serviceUnitId})`,
  visaPurposeId = `@@index([${ATTRIBUTE.visaPurposeId}], map: ${INDEX_NAME.visaPurposeId})`,
  visaTypeId = `@@index([${ATTRIBUTE.visaTypeId}], map: ${INDEX_NAME.visaTypeId})`,
  websiteId = `@@index([${ATTRIBUTE.websiteId}], map: ${INDEX_NAME.websiteId})`,
  xeroAccountId = `@@index([${ATTRIBUTE.xeroAccountId}], map: ${INDEX_NAME.xeroAccountId})`,
  upgradeServiceId = `@@index([${ATTRIBUTE.upgradeServiceId}], map: ${INDEX_NAME.upgradeServiceId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
