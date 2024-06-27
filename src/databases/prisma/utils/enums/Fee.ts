import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  serviceId = 'serviceId',
  feeTypeId = 'feeTypeId',
  value = 'value',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  serviceId = 'service_id',
  feeTypeId = 'fee_type_id',
  value = 'value',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  feeType = RELATION_DEFAULT.feeType,
  service = RELATION_DEFAULT.service,
}

export enum INDEX {
  feeTypeId = `@@index([${ATTRIBUTE.feeTypeId}])`,
  serviceId = `@@index([${ATTRIBUTE.serviceId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
