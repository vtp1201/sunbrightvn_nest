import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/TitleName';
import { deleted, oneToMany } from '../mixins';
import { customer, person } from '.';

export default createModel(MODEL_NAME.TITLE_NAME, (TitleNameModel) => {
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
  const personsRelation = oneToMany({
    model: person,
    relation: RELATION.persons,
  });

  // defined Model
  process.nextTick(() => {
    TitleNameModel.int(ATTRIBUTE.id, {
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
      .mixin(personsRelation)

      // table name
      .map(TABLE_NAME.TITLE_NAME);
  });
});
