import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/SingaporeAcra';

export default createModel(MODEL_NAME.SINGAPORE_ACRA, (SingaporeAcraModel) => {
  // defined Model
  process.nextTick(() => {
    SingaporeAcraModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.entityName, {
        map: COLUMN.entityName,
        unique: true,
        raw: RAW_STRING.LENGTH_3072,
      })

      // indexes
      .raw(INDEX.entityName)

      // table name
      .map(TABLE_NAME.SINGAPORE_ACRA);
  });
});
