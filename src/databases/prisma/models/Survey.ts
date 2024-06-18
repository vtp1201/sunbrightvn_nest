import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/Survey';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.SURVEY, (SurveyModel) => {
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
    SurveyModel.int(ATTRIBUTE.id, {
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

      // table name
      .map(TABLE_NAME.SURVEY);
  });
});
