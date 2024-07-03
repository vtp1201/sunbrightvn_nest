import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/OrderStatus';
import { deleted, oneToMany } from '../mixins';
import { order } from '.';

export default createModel(MODEL_NAME.ORDER_STATUS, (OrderStatusModel) => {
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
  const ordersRelation = oneToMany({
    model: order,
    relation: RELATION.orders,
  });

  // defined Model
  process.nextTick(() => {
    OrderStatusModel.int(ATTRIBUTE.id, {
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
      // dateTime marks
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.ORDER_STATUS);
  });
});
