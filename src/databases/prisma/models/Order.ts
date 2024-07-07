import { createModel } from 'schemix';

import { MODEL_NAME, RAW_NUMBER, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Order';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import {
  bank,
  billing,
  company,
  companyEvent,
  country,
  customer,
  file,
  orderFrom,
  orderItem,
  orderStatus,
  paymentGateway,
  paymentInformation,
  supportCase,
  task,
  visaOrder,
  voucher,
  website,
  xeroInvoiceStatus,
} from '.';
import { RELATION_DEFAULT } from '../utils/enums/default';

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

  // defined Relations
  const companyEventsRelation = oneToMany({
    model: companyEvent,
    relation: RELATION.companyEvents,
  });
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  const billingRelation = oneToOne({
    attribute: ATTRIBUTE.billingId,
    model: billing,
    relation: RELATION.billing,
    option: { optional: true },
  });
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
    option: { optional: true },
  });
  const customerRelation = oneToOne({
    attribute: ATTRIBUTE.customerId,
    model: customer,
    relation: RELATION.customer,
    isNeedName: true,
    option: { optional: true },
  });
  const orderStatusRelation = oneToOne({
    attribute: ATTRIBUTE.orderStatusId,
    model: orderStatus,
    relation: RELATION.orderStatus,
  });
  const paymentGatewayRelation = oneToOne({
    attribute: ATTRIBUTE.paymentGatewayId,
    model: paymentGateway,
    relation: RELATION.paymentGateway,
    option: { optional: true },
  });
  const websiteRelation = oneToOne({
    attribute: ATTRIBUTE.websiteId,
    model: website,
    relation: RELATION.website,
    option: { optional: true },
  });
  const xeroInvoiceStatusRelation = oneToOne({
    attribute: ATTRIBUTE.xeroInvoiceStatusId,
    model: xeroInvoiceStatus,
    relation: RELATION.xeroInvoiceStatus,
    option: { optional: true },
  });
  const countryCardRelation = oneToOne({
    attribute: ATTRIBUTE.countryCardId,
    model: country,
    relation: RELATION.countryCard,
    option: { optional: true },
  });
  const orderFromRelation = oneToOne({
    attribute: ATTRIBUTE.orderFromId,
    model: orderFrom,
    relation: RELATION.orderFrom,
    option: { optional: true },
  });
  const banksRelation = oneToMany({
    model: bank,
    relation: RELATION.banks,
  });
  const orderItemsRelation = oneToMany({
    model: orderItem,
    relation: RELATION.orderItems,
  });
  const paymentsInformationRelation = oneToMany({
    model: paymentInformation,
    relation: RELATION.paymentsInformation,
  });
  const supportCasesRelation = oneToMany({
    model: supportCase,
    relation: RELATION.supportCases,
  });
  const tasksRelation = oneToMany({
    model: task,
    relation: RELATION.tasks,
    fromRelation: RELATION_DEFAULT.order,
  });
  const taskUpgradeOrdersRelation = oneToMany({
    model: task,
    relation: RELATION.upgradeOrderTasks,
    fromRelation: RELATION_DEFAULT.upgradeOrder,
  });
  const visaOrdersRelation = oneToMany({
    model: visaOrder,
    relation: RELATION.visaOrders,
  });
  const vouchersRelation = oneToMany({
    model: voucher,
    relation: RELATION.vouchers,
  });

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

      // relations
      .mixin(companyEventsRelation)
      .mixin(customersRelation)
      .mixin(filesRelation)
      .mixin(billingRelation)
      .mixin(companyRelation)
      .mixin(customerRelation)
      .mixin(orderStatusRelation)
      .mixin(paymentGatewayRelation)
      .mixin(websiteRelation)
      .mixin(xeroInvoiceStatusRelation)
      .mixin(countryCardRelation)
      .mixin(orderFromRelation)
      .mixin(banksRelation)
      .mixin(orderItemsRelation)
      .mixin(paymentsInformationRelation)
      .mixin(supportCasesRelation)
      .mixin(tasksRelation)
      .mixin(taskUpgradeOrdersRelation)
      .mixin(visaOrdersRelation)
      .mixin(vouchersRelation)

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
