import { createModel } from 'schemix';

import { order, orderItemStatus, Package, service } from '.';
import { createdTime, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_NUMBER, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/OrderItem';

export default createModel(MODEL_NAME.ORDER_ITEM, (OrderItemModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });

  // defined Relations
  const orderRelation = oneToOne({
    attribute: ATTRIBUTE.orderId,
    map: INDEX_NAME.orderId,
    model: order,
    relation: RELATION.order,
  });
  const orderItemStatusRelation = oneToOne({
    attribute: ATTRIBUTE.orderItemStatusId,
    map: INDEX_NAME.orderItemStatusId,
    model: orderItemStatus,
    relation: RELATION.orderItemStatus,
  });
  const serviceRelation = oneToOne({
    attribute: ATTRIBUTE.serviceId,
    map: INDEX_NAME.serviceId,
    model: service,
    relation: RELATION.service,
  });
  const packageRelation = oneToOne({
    attribute: ATTRIBUTE.packageId,
    map: INDEX_NAME.packageId,
    model: Package,
    relation: RELATION.package,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    OrderItemModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
      })
      .int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
      .int(ATTRIBUTE.packageId, {
        map: COLUMN.packageId,
        optional: true,
      })
      .float(ATTRIBUTE.unitPrice, {
        map: COLUMN.unitPrice,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .int(ATTRIBUTE.quantity, {
        map: COLUMN.quantity,
        optional: true,
      })
      .float(ATTRIBUTE.amount, {
        map: COLUMN.amount,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.voucherId, {
        map: COLUMN.voucherId,
        optional: true,
      })
      .int(ATTRIBUTE.promotionId, {
        map: COLUMN.promotionId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isRefund, {
        map: COLUMN.isRefund,
        default: false,
      })
      .int(ATTRIBUTE.discountOrderItemId, {
        map: COLUMN.discountOrderItemId,
        optional: true,
      })
      .int(ATTRIBUTE.orderItemStatusId, {
        map: COLUMN.orderItemStatusId,
        default: 0,
      })
      .dateTime(ATTRIBUTE.finishedTime, {
        map: COLUMN.finishedTime,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)

      // relations
      .mixin(orderRelation)
      .mixin(orderItemStatusRelation)
      .mixin(serviceRelation)
      .mixin(packageRelation)

      // indexes
      .raw(INDEX.orderId)
      .raw(INDEX.orderItemStatusId)
      .raw(INDEX.packageId)
      .raw(INDEX.serviceId)

      // table name
      .map(TABLE_NAME.ORDER_ITEM);
  });
});
