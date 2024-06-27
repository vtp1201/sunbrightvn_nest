import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  description = 'description',
  value = 'value',
  serviceId = 'serviceId',
  numOfCompany = 'numOfCompany',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  description = 'description',
  value = 'value',
  serviceId = 'service_id',
  numOfCompany = 'num_of_company',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  service = RELATION_DEFAULT.service,
  users = RELATION_DEFAULT.users,
}

export enum INDEX {
  serviceId = `@@index([${ATTRIBUTE.serviceId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
