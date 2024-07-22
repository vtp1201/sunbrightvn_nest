import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  googleClientId = 'googleClientId',
  ipAddress = 'ipAddress',
  voucherTypeId = 'voucherTypeId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  googleClientId = 'google_client_id',
  ipAddress = 'ip_address',
  voucherTypeId = 'voucher_type_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  voucherType = RELATION_DEFAULT.voucherType,
}

const tableName = TABLE_NAME.CLICK;
export enum INDEX_NAME {
  voucherTypeId = `"${tableName}_${COLUMN.voucherTypeId}_fkey"`,
}

export enum INDEX {
  voucherTypeId = `@@index([${ATTRIBUTE.voucherTypeId}], map: ${INDEX_NAME.voucherTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
