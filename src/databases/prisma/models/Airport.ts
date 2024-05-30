import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/Airport';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.AIRPORT, (AirportModel) => {
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
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.AIRPORT);
});
