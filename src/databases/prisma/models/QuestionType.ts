import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/QuestionType';

export default createModel(MODEL_NAME.QUESTION_TYPE, (QuestionTypeModel) => {
  // defined Model
  process.nextTick(() => {
    QuestionTypeModel.int(ATTRIBUTE.id, {
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

      // table name
      .map(TABLE_NAME.QUESTION_TYPE);
  });
});
