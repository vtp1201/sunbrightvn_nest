import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/PaymentGateway';
import { deleted, oneToMany } from '../mixins';
import { order } from '.';

export default createModel(
  MODEL_NAME.PAYMENT_GATEWAY,
  (PaymentGatewayModel) => {
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
      PaymentGatewayModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.LENGTH_100,
        })

        // dateTime marks
        .mixin(initDeleted)

        // relations
        .mixin(ordersRelation)

        // table name
        .map(TABLE_NAME.PAYMENT_GATEWAY);
    });
  },
);
