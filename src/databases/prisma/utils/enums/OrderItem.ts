import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  orderId = 'orderId',
  serviceId = 'serviceId',
  packageId = 'packageId',
  unitPrice = 'unitPrice',
  quantity = 'quantity',
  amount = 'amount',
  description = 'description',
  voucherId = 'voucherId',
  promotionId = 'promotionId',
  isRefund = 'isRefund',
  discountOrderItemId = 'discountOrderItemId',
  orderItemStatusId = 'orderItemStatusId',
  finishedTime = ATTRIBUTE_DEFAULT.finishedTime,
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
}

export enum COLUMN {
  id = 'id',
  orderId = 'order_id',
  serviceId = 'service_id',
  packageId = 'package_id',
  unitPrice = 'unit_price',
  quantity = 'quantity',
  amount = 'amount',
  description = 'description',
  voucherId = 'voucher_id',
  promotionId = 'promotion_id',
  isRefund = 'is_refund',
  discountOrderItemId = 'discount_order_item_id',
  orderItemStatusId = 'order_item_status_id',
  finishedTime = COLUMN_DEFAULT.finishedTime,
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
}

export enum RELATION {
  order = RELATION_DEFAULT.order,
  orderItemStatus = RELATION_DEFAULT.orderItemStatus,
  package = RELATION_DEFAULT.package,
  service = RELATION_DEFAULT.service,
}

const tableName = TABLE_NAME.ORDER_ITEM;
export enum INDEX_NAME {
  orderId = `"${tableName}_${COLUMN.orderId}_fkey"`,
  orderItemStatusId = `"${tableName}_${COLUMN.orderItemStatusId}_fkey"`,
  packageId = `"${tableName}_${COLUMN.packageId}_fkey"`,
  serviceId = `"${tableName}_${COLUMN.serviceId}_fkey"`,
}

export enum INDEX {
  orderId = `@@index([${ATTRIBUTE.orderId}], map: ${INDEX_NAME.orderId})`,
  orderItemStatusId = `@@index([${ATTRIBUTE.orderItemStatusId}], map: ${INDEX_NAME.orderItemStatusId})`,
  packageId = `@@index([${ATTRIBUTE.packageId}], map: ${INDEX_NAME.packageId})`,
  serviceId = `@@index([${ATTRIBUTE.serviceId}], map: ${INDEX_NAME.serviceId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
