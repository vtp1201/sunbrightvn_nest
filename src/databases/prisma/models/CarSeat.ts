import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CarSeat';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.CAR_SEAT, (CarSeatModel) => {
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
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.CAR_SEAT);
});
