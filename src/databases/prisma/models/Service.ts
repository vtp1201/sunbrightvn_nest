import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Service';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.SERVICE, (ServiceModel) => {
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
    ServiceModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.serviceTypeId, {
        map: COLUMN.serviceTypeId,
      })
      .int(ATTRIBUTE.websiteId, {
        map: COLUMN.websiteId,
      })
      .int(ATTRIBUTE.visaTypeId, {
        map: COLUMN.visaTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.visaPurposeId, {
        map: COLUMN.visaPurposeId,
        optional: true,
      })
      .int(ATTRIBUTE.carTypeId, {
        map: COLUMN.carTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.carSeatId, {
        map: COLUMN.carSeatId,
        optional: true,
      })
      .int(ATTRIBUTE.airportId, {
        map: COLUMN.airportId,
        optional: true,
      })
      .int(ATTRIBUTE.serviceUnitId, {
        map: COLUMN.serviceUnitId,
        optional: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.xeroItemId, {
        map: COLUMN.xeroItemId,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.xeroItemCode, {
        map: COLUMN.xeroItemCode,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.uuid, {
        map: COLUMN.uuid,
        raw: RAW_STRING.CHAR_36,
        optional: true,
      })
      .int(ATTRIBUTE.xeroAccountId, {
        map: COLUMN.xeroAccountId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isActive, {
        map: COLUMN.isActive,
        default: true,
      })
      .boolean(ATTRIBUTE.isServiceOutsideCompany, {
        map: COLUMN.isServiceOutsideCompany,
        default: false,
      })
      .boolean(ATTRIBUTE.isDisplayed, {
        map: COLUMN.isDisplayed,
        default: true,
      })
      .boolean(ATTRIBUTE.isAttachIncorp, {
        map: COLUMN.isAttachIncorp,
        default: true,
      })
      .int(ATTRIBUTE.quantity, {
        map: COLUMN.quantity,
        optional: true,
      })
      .int(ATTRIBUTE.upgradeServiceId, {
        map: COLUMN.upgradeServiceId,
        optional: true,
      })
      .int(ATTRIBUTE.discountServiceId, {
        map: COLUMN.discountServiceId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.airportId)
      .raw(INDEX.carSeatId)
      .raw(INDEX.carTypeId)
      .raw(INDEX.discountServiceId)
      .raw(INDEX.serviceTypeId)
      .raw(INDEX.serviceUnitId)
      .raw(INDEX.upgradeServiceId)
      .raw(INDEX.visaPurposeId)
      .raw(INDEX.visaTypeId)
      .raw(INDEX.websiteId)
      .raw(INDEX.xeroAccountId)

      // table name
      .map(TABLE_NAME.SERVICE);
  });
});
