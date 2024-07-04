import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/TitleName';
import { deleted, oneToMany } from '../mixins';
import { customer, user } from '.';

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
  const usersRelation = oneToMany({
    model: user,
    relation: RELATION.users,
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
      .mixin(usersRelation)

      // table name
      .map(TABLE_NAME.TITLE_NAME);
  });
});
