import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CarSeat';
import { deleted, oneToMany } from '../mixins';
import { service } from '.';

export default createModel(MODEL_NAME.CAR_SEAT, (CarSeatModel) => {
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
    CarSeatModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.babyMax, {
        map: COLUMN.babyMax,
        optional: true,
        default: 0,
      })
      .int(ATTRIBUTE.value, {
        map: COLUMN.value,
        optional: true,
        default: 0,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(servicesRelation)

      // table name
      .map(TABLE_NAME.CAR_SEAT);
  });
});
