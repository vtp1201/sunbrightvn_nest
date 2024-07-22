import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  countryId = 'countryId',
  serviceId = 'serviceId',
  entityTypeId = 'entityTypeId',
  name = 'name',
  description = 'description',
  dataConfig = 'dataConfig',
  isCalendar = 'isCalendar',
  yearCurrent = 'yearCurrent',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  countryId = 'country_id',
  serviceId = 'service_id',
  entityTypeId = 'entity_type_id',
  name = 'name',
  description = 'description',
  dataConfig = 'data_config',
  isCalendar = 'is_calendar',
  yearCurrent = 'year_current',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
  service = RELATION_DEFAULT.service,
  entityType = RELATION_DEFAULT.entityType,
}

const tableName = TABLE_NAME.COUNTRY_HAS_SERVICE;
export enum INDEX_NAME {
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
  serviceId = `"${tableName}_${COLUMN.serviceId}_fkey"`,
  entityTypeId = `"${tableName}_${COLUMN.entityTypeId}_fkey"`,
}

export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
  serviceId = `@@index([${ATTRIBUTE.serviceId}], map: ${INDEX_NAME.serviceId})`,
  entityTypeId = `@@index([${ATTRIBUTE.entityTypeId}], map: ${INDEX_NAME.entityTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
