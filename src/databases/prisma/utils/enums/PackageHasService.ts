import { TABLE_NAME } from '../constants';
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

const tableName = TABLE_NAME.PACKAGE_HAS_SERVICE;
export enum INDEX_NAME {
  packageId = `"${tableName}_${COLUMN.packageId}_fkey"`,
  serviceId = `"${tableName}_${COLUMN.serviceId}_fkey"`,
}

export enum INDEX {
  packageId = `@@index([${ATTRIBUTE.packageId}], map: ${INDEX_NAME.packageId})`,
  serviceId = `@@index([${ATTRIBUTE.serviceId}], map: ${INDEX_NAME.serviceId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
