import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Airport';
import { deleted, oneToMany } from '../mixins';
import { customer, service, visaOrder } from './';

export default createModel(MODEL_NAME.AIRPORT, (AirportModel) => {
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
    AirportModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(customersRelation)
      .mixin(servicesRelation)
      .mixin(visaOrdersRelation)

      // table name
      .map(TABLE_NAME.AIRPORT);
  });
});
