import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  voucherCode = 'voucherCode',
  customerId = 'customerId',
  googleClientId = 'googleClientId',
  voucherTypeId = 'voucherTypeId',
  orderId = 'orderId',
  isActive = 'isActive',
  isUsed = 'isUsed',
  isRunning = 'isRunning',
  expiredTime = 'expiredTime',
  activeDate = 'activeDate',
  usedDate = 'usedDate',
  openDate = 'openDate',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  voucherCode = 'voucher_code',
  customerId = 'customer_id',
  googleClientId = 'google_client_id',
  voucherTypeId = 'voucher_type_id',
  orderId = 'order_id',
  isActive = 'is_active',
  isUsed = 'is_used',
  isRunning = 'is_running',
  expiredTime = 'expired_time',
  activeDate = 'active_date',
  usedDate = 'used_date',
  openDate = 'open_date',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  customer = RELATION_DEFAULT.customer,
  order = RELATION_DEFAULT.order,
  voucherType = RELATION_DEFAULT.voucherType,
}

export enum INDEX {
  customerId = `@@index([${ATTRIBUTE.customerId}])`,
  orderId = `@@index([${ATTRIBUTE.orderId}])`,
  voucherTypeId = `@@index([${ATTRIBUTE.voucherTypeId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
