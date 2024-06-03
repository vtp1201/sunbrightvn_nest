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

export default {
  ATTRIBUTE,
  RELATION,
};
