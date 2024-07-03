import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/OrderItemStatus';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { orderItem } from '.';

export default createModel(
  MODEL_NAME.ORDER_ITEM_STATUS,
  (OrderItemStatusModel) => {
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

    const orderItemsRelation = oneToMany({
      model: orderItem,
      relation: RELATION.orderItems,
    });

    // defined Model
    process.nextTick(() => {
      OrderItemStatusModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.LENGTH_45,
        })
        .int(ATTRIBUTE.order, {
          map: COLUMN.order,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(orderItemsRelation)

        // table name
        .map(TABLE_NAME.ORDER_ITEM_STATUS);
    });
  },
);
