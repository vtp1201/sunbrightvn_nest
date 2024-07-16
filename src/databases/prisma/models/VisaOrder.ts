import { createModel } from 'schemix';

import { airport, order, visaPurpose, visaType } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/VisaOrder';

export default createModel(MODEL_NAME.VISA_ORDER, (VisaOrderModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });
  const initDeleted = deleted(
    {
      attribute: ATTRIBUTE.deletedTime,
      column: COLUMN.deletedTime,
    },
    {
      attribute: ATTRIBUTE.isDeleted,
      column: COLUMN.isDeleted,
    },
  );

  // defined Relations
  const airportRelation = oneToOne({
    attribute: ATTRIBUTE.airportId,
    model: airport,
    relation: RELATION.airport,
    option: { optional: true },
  });
  const orderRelation = oneToOne({
    attribute: ATTRIBUTE.orderId,
    model: order,
    relation: RELATION.order,
  });
  const visaPurposeRelation = oneToOne({
    attribute: ATTRIBUTE.visaPurposeId,
    model: visaPurpose,
    relation: RELATION.visaPurpose,
    option: { optional: true },
  });
  const visaTypeRelation = oneToOne({
    attribute: ATTRIBUTE.visaTypeId,
    model: visaType,
    relation: RELATION.visaType,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    VisaOrderModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
      })
      .int(ATTRIBUTE.airportId, {
        map: COLUMN.airportId,
        optional: true,
      })
      .int(ATTRIBUTE.visaPurposeId, {
        map: COLUMN.visaPurposeId,
        optional: true,
      })
      .int(ATTRIBUTE.visaTypeId, {
        map: COLUMN.visaTypeId,
        optional: true,
      })
      .string(ATTRIBUTE.flightNumber, {
        map: COLUMN.flightNumber,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .dateTime(ATTRIBUTE.arrivalTime, {
        map: COLUMN.arrivalTime,
        raw: RAW_DATE_TIME.DATE_CURRENT,
      })
      .dateTime(ATTRIBUTE.entryTime, {
        map: COLUMN.entryTime,
        raw: RAW_DATE_TIME.DATE_CURRENT,
      })
      .dateTime(ATTRIBUTE.exitTime, {
        map: COLUMN.exitTime,
        raw: RAW_DATE_TIME.DATE_CURRENT,
      })
      .dateTime(ATTRIBUTE.carPickupTime, {
        map: COLUMN.carPickupTime,
        raw: RAW_DATE_TIME.DATE_CURRENT,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(airportRelation)
      .mixin(orderRelation)
      .mixin(visaPurposeRelation)
      .mixin(visaTypeRelation)

      // indexes
      // .raw(INDEX.airportId)
      // .raw(INDEX.orderId)
      // .raw(INDEX.visaPurposeId)
      // .raw(INDEX.visaTypeId)

      // table name
      .map(TABLE_NAME.VISA_ORDER);
  });
});
