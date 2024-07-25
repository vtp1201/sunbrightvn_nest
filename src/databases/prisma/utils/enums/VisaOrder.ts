import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  orderId = 'orderId',
  airportId = 'airportId',
  visaPurposeId = 'visaPurposeId',
  visaTypeId = 'visaTypeId',
  flightNumber = 'flightNumber',
  arrivalTime = 'arrivalTime',
  entryTime = 'entryTime',
  exitTime = 'exitTime',
  carPickupTime = 'carPickupTime',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  orderId = 'order_id',
  airportId = 'airport_id',
  visaPurposeId = 'visa_purpose_id',
  visaTypeId = 'visa_type_id',
  flightNumber = 'flight_number',
  arrivalTime = 'arrival_time',
  entryTime = 'entry_time',
  exitTime = 'exit_time',
  carPickupTime = 'car_pickup_time',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  airport = RELATION_DEFAULT.airport,
  order = RELATION_DEFAULT.order,
  visaPurpose = RELATION_DEFAULT.visaPurpose,
  visaType = RELATION_DEFAULT.visaType,
}

const tableName = TABLE_NAME.VISA_ORDER;
export enum INDEX_NAME {
  airportId = `"${tableName}_${COLUMN.airportId}_fkey"`,
  orderId = `"${tableName}_${COLUMN.orderId}_fkey"`,
  visaPurposeId = `"${tableName}_${COLUMN.visaPurposeId}_fkey"`,
  visaTypeId = `"${tableName}_${COLUMN.visaTypeId}_fkey"`,
}

export enum INDEX {
  airportId = `@@index([${ATTRIBUTE.airportId}], map: ${INDEX_NAME.airportId})`,
  orderId = `@@index([${ATTRIBUTE.orderId}], map: ${INDEX_NAME.orderId})`,
  visaPurposeId = `@@index([${ATTRIBUTE.visaPurposeId}], map: ${INDEX_NAME.visaPurposeId})`,
  visaTypeId = `@@index([${ATTRIBUTE.visaTypeId}], map: ${INDEX_NAME.visaTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
