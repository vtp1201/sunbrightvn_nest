import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CarType';
import { deleted, oneToMany } from '../mixins';
import { service } from '.';

export default createModel(MODEL_NAME.CAR_TYPE, (CarTypeModel) => {
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
  const servicesRelation = oneToMany({
    model: service,
    relation: RELATION.services,
  });

  // defined Model
  process.nextTick(() => {
    CarTypeModel.int(ATTRIBUTE.id, {
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
      .mixin(servicesRelation)

      // table name
      .map(TABLE_NAME.CAR_TYPE);
  });
});
