import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/QuestionType';
import { oneToMany } from '../mixins';
import { question } from '.';

export default createModel(MODEL_NAME.QUESTION_TYPE, (QuestionTypeModel) => {
  // defined Relations
  const questionsRelation = oneToMany({
    model: question,
    relation: RELATION.questions,
  });

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

      // relations
      .mixin(questionsRelation)

      // table name
      .map(TABLE_NAME.QUESTION_TYPE);
  });
});
