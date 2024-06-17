// ServiceEnum.ts

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
  companyEvent = RELATION_DEFAULT.companyEvent,
  fees = RELATION_DEFAULT.fees,
  orderItems = RELATION_DEFAULT.orderItems,
  serviceType = RELATION_DEFAULT.serviceType,
  serviceUnit = RELATION_DEFAULT.serviceUnit,
  visaPurpose = RELATION_DEFAULT.visaPurpose,
  visaType = RELATION_DEFAULT.visaType,
  website = RELATION_DEFAULT.website,
  xeroAccount = RELATION_DEFAULT.xeroAccount,
  subscriptions = RELATION_DEFAULT.subscriptions,
}

export enum INDEX {
  discountServiceId = `@@index([${ATTRIBUTE.discountServiceId}], map: "fk_discount_service_id_idx")`,
  airportId = `@@index([${ATTRIBUTE.airportId}], map: "fk_service_airport1_idx")`,
  carSeatId = `@@index([${ATTRIBUTE.carSeatId}], map: "fk_service_car_seat1_idx")`,
  carTypeId = `@@index([${ATTRIBUTE.carTypeId}], map: "fk_service_car_type1_idx")`,
  serviceTypeId = `@@index([${ATTRIBUTE.serviceTypeId}], map: "fk_service_service_type1_idx")`,
  serviceUnitId = `@@index([${ATTRIBUTE.serviceUnitId}], map: "fk_service_service_unit1_idx")`,
  visaPurposeId = `@@index([${ATTRIBUTE.visaPurposeId}], map: "fk_service_visa_purpose1_idx")`,
  visaTypeId = `@@index([${ATTRIBUTE.visaTypeId}], map: "fk_service_visa_type1_idx")`,
  websiteId = `@@index([${ATTRIBUTE.websiteId}], map: "fk_service_website1_idx")`,
  xeroAccountId = `@@index([${ATTRIBUTE.xeroAccountId}], map: "fk_service_xero_account")`,
  upgradeServiceId = `@@index([${ATTRIBUTE.upgradeServiceId}], map: "fk_upgrade_service_id_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
