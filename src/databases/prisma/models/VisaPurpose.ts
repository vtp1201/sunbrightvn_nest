import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/VisaPurpose';
import { deleted, oneToMany } from '../mixins';
import { customer, service, visaOrder } from '.';

export default createModel(MODEL_NAME.VISA_PURPOSE, (VisaPurposeModel) => {
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
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });
  const servicesRelation = oneToMany({
    model: service,
    relation: RELATION.services,
  });
  const visaOrdersRelation = oneToMany({
    model: visaOrder,
    relation: RELATION.visaOrders,
  });

  // defined Model
  process.nextTick(() => {
    VisaPurposeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.TEXT,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(customersRelation)
      .mixin(servicesRelation)
      .mixin(visaOrdersRelation)

      // table name
      .map(TABLE_NAME.VISA_PURPOSE);
  });
});
