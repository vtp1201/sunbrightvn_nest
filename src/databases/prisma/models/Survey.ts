import { createModel } from 'schemix';

import { surveyChoice } from '.';
import { deleted, oneToMany } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Survey';

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

  // defined Relations
  const surveyChoicesRelation = oneToMany({
    model: surveyChoice,
    relation: RELATION.surveyChoices,
  });

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

      // relations
      .mixin(surveyChoicesRelation)

      // table name
      .map(TABLE_NAME.SURVEY);
  });
});
