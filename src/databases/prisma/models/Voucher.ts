import { createModel } from 'schemix';

import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Voucher';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.VOUCHER, (VoucherModel) => {
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
    VoucherModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.voucherCode, {
        map: COLUMN.voucherCode,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.customerId, {
        map: COLUMN.customerId,
        optional: true,
      })
      .int(ATTRIBUTE.googleClientId, {
        map: COLUMN.googleClientId,
        optional: true,
      })
      .int(ATTRIBUTE.voucherTypeId, {
        map: COLUMN.voucherTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isActive, {
        map: COLUMN.isActive,
        default: false,
      })
      .boolean(ATTRIBUTE.isUsed, {
        map: COLUMN.isUsed,
        default: false,
      })
      .boolean(ATTRIBUTE.isRunning, {
        map: COLUMN.isRunning,
        default: false,
      })
      .dateTime(ATTRIBUTE.expiredTime, {
        map: COLUMN.expiredTime,
        raw: RAW_DATE_TIME.DATE_CURRENT,
      })
      .dateTime(ATTRIBUTE.activeDate, {
        map: COLUMN.activeDate,
        raw: RAW_DATE_TIME.DATE_CURRENT,
      })
      .dateTime(ATTRIBUTE.usedDate, {
        map: COLUMN.usedDate,
        raw: RAW_DATE_TIME.DATE_CURRENT,
      })
      .dateTime(ATTRIBUTE.openDate, {
        map: COLUMN.openDate,
        raw: RAW_DATE_TIME.DATE_CURRENT,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.customerId)
      // .raw(INDEX.orderId)
      // .raw(INDEX.voucherTypeId)

      // table name
      .map(TABLE_NAME.VOUCHER);
  });
});
