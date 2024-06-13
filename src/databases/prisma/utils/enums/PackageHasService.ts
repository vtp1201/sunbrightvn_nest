import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  packageId = 'packageId',
  serviceId = 'serviceId',
  typeId = 'typeId',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  packageId = 'package_id',
  serviceId = 'service_id',
  typeId = 'type_id',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  package = RELATION_DEFAULT.package,
  service = RELATION_DEFAULT.service,
}

export default {
  ATTRIBUTE,
  RELATION,
};
