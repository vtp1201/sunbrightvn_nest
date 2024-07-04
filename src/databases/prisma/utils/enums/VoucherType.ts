import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  config = 'config',
  percent = 'percent',
  uuid = 'uuid',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  config = 'config',
  percent = 'percent',
  uuid = 'uuid',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  campaignHasVoucherTypes = RELATION_DEFAULT.campaignHasVoucherTypes,
  clicks = RELATION_DEFAULT.clicks,
  vouchers = RELATION_DEFAULT.vouchers,
}

export default {
  ATTRIBUTE,
  RELATION,
};
