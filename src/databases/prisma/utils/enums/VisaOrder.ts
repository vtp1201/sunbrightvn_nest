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

export enum INDEX {
  airportId = `@@index([${ATTRIBUTE.airportId}], map: "fk_vis_airport_id_air_id_a20y")`,
  orderId = `@@index([${ATTRIBUTE.orderId}], map: "fk_vis_order_id_ord_id_fwgt")`,
  visaPurposeId = `@@index([${ATTRIBUTE.visaPurposeId}], map: "fk_vis_visa_purpose_id_vis_id_9syb")`,
  visaTypeId = `@@index([${ATTRIBUTE.visaTypeId}], map: "fk_vis_visa_type_id_vis_id_l2k0")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
