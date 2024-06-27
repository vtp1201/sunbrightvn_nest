import { createModel } from 'schemix';

import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/VisaOrder';
import { createdTime, deleted, updatedTime } from '../mixins';

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

      // indexes
      // .raw(INDEX.airportId)
      // .raw(INDEX.orderId)
      // .raw(INDEX.visaPurposeId)
      // .raw(INDEX.visaTypeId)

      // table name
      .map(TABLE_NAME.VISA_ORDER);
  });
});
