import { createModel } from 'schemix';

import { MODEL_NAME, RAW_NUMBER, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Order';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.ORDER, (OrderModel) => {
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
    OrderModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.customerId, {
        map: COLUMN.customerId,
        optional: true,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
        optional: true,
      })
      .float(ATTRIBUTE.amount, {
        map: COLUMN.amount,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .float(ATTRIBUTE.amountConverted, {
        map: COLUMN.amountConverted,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .string(ATTRIBUTE.amountCode, {
        map: COLUMN.amountCode,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .float(ATTRIBUTE.amountExchangeRate, {
        map: COLUMN.amountExchangeRate,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .float(ATTRIBUTE.paidAmount, {
        map: COLUMN.paidAmount,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .float(ATTRIBUTE.refundAmount, {
        map: COLUMN.refundAmount,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .float(ATTRIBUTE.discount, {
        map: COLUMN.discount,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .float(ATTRIBUTE.creditAmount, {
        map: COLUMN.creditAmount,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .string(ATTRIBUTE.creditDescription, {
        map: COLUMN.creditDescription,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .float(ATTRIBUTE.annualFee, {
        map: COLUMN.annualFee,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .boolean(ATTRIBUTE.isInvoiced, {
        map: COLUMN.isInvoiced,
        default: false,
      })
      .string(ATTRIBUTE.orderCode, {
        map: COLUMN.orderCode,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.xeroInvoiceId, {
        map: COLUMN.xeroInvoiceId,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.paymentGatewayId, {
        map: COLUMN.paymentGatewayId,
        optional: true,
      })
      .string(ATTRIBUTE.paypalOrderId, {
        map: COLUMN.paypalOrderId,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.paypalInvoiceId, {
        map: COLUMN.paypalInvoiceId,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.xeroInvoiceStatusId, {
        map: COLUMN.xeroInvoiceStatusId,
        optional: true,
      })
      .string(ATTRIBUTE.xeroInvoiceUrl, {
        map: COLUMN.xeroInvoiceUrl,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.xeroInvoiceNo, {
        map: COLUMN.xeroInvoiceNo,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.orderStatusId, {
        map: COLUMN.orderStatusId,
        default: 0,
      })
      .dateTime(ATTRIBUTE.paidTime, {
        map: COLUMN.paidTime,
        optional: true,
      })
      .int(ATTRIBUTE.websiteId, {
        map: COLUMN.websiteId,
        optional: true,
        default: 1,
      })
      .int(ATTRIBUTE.billingId, {
        map: COLUMN.billingId,
        optional: true,
      })
      .int(ATTRIBUTE.orderFromId, {
        map: COLUMN.orderFromId,
        optional: true,
      })
      .int(ATTRIBUTE.countryCardId, {
        map: COLUMN.countryCardId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.billingId)
      // .raw(INDEX.companyId)
      // .raw(INDEX.countryCardId)
      // .raw(INDEX.customerId)
      // .raw(INDEX.orderFromId)
      // .raw(INDEX.orderStatusId)
      // .raw(INDEX.paymentGatewayId)
      // .raw(INDEX.websiteId)
      // .raw(INDEX.xeroInvoiceStatusId)

      // table name
      .map(TABLE_NAME.ORDER);
  });
});
