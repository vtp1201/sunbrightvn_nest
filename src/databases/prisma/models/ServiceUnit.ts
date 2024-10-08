import { createModel } from 'schemix';

import { service } from '.';
import { deleted, oneToMany } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ServiceUnit';

export default createModel(MODEL_NAME.SERVICE_UNIT, (ServiceUnitModel) => {
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
    ServiceUnitModel.int(ATTRIBUTE.id, {
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
      .string(ATTRIBUTE.plural, {
        map: COLUMN.plural,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })

      // relations
      .mixin(servicesRelation)

      // dateTime marks
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.SERVICE_UNIT);
  });
});
