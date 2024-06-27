import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Option';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.OPTION, (OptionModel) => {
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

  // defined Model
  process.nextTick(() => {
    OptionModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.content, {
        map: COLUMN.content,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.questionId, {
        map: COLUMN.questionId,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.questionId)

      // table name
      .map(TABLE_NAME.OPTION);
  });
});
