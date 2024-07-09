import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/XeroInvoiceStatus';
import { deleted, oneToMany } from '../mixins';
import { order } from '.';

export default createModel(
  MODEL_NAME.XERO_INVOICE_STATUS,
  (XeroInvoiceStatusModel) => {
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

    // relations defined
    const ordersRelation = oneToMany({
      model: order,
      relation: RELATION.orders,
    });

    // defined Model
    process.nextTick(() => {
      XeroInvoiceStatusModel.int(ATTRIBUTE.id, {
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
        .string(ATTRIBUTE.xeroCode, {
          map: COLUMN.xeroCode,
          raw: RAW_STRING.LENGTH_100,
        })
        .string(ATTRIBUTE.description, {
          map: COLUMN.description,
          raw: RAW_STRING.LENGTH_200,
          optional: true,
        })

        // dateTime marks
        .mixin(initDeleted)

        // relations
        .mixin(ordersRelation)

        // table name
        .map(TABLE_NAME.XERO_INVOICE_STATUS);
    });
  },
);
