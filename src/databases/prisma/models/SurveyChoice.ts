import { createModel } from 'schemix';

import { customerHasSurveyChoice, survey } from '.';
import { deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/SurveyChoice';

export default createModel(MODEL_NAME.SURVEY_CHOICE, (SurveyChoiceModel) => {
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
  const customerHasSurveyChoicesRelation = oneToMany({
    model: customerHasSurveyChoice,
    relation: RELATION.customerHasSurveyChoices,
  });
  const surveyRelation = oneToOne({
    attribute: ATTRIBUTE.surveyId,
    model: survey,
    relation: RELATION.survey,
  });

  // defined Model
  process.nextTick(() => {
    SurveyChoiceModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.surveyId, {
        map: COLUMN.surveyId,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.TEXT,
      })
      .boolean(ATTRIBUTE.isContent, {
        map: COLUMN.isContent,
        default: false,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(customerHasSurveyChoicesRelation)
      .mixin(surveyRelation)

      // indexes
      // .raw(INDEX.surveyId)

      // table name
      .map(TABLE_NAME.SURVEY_CHOICE);
  });
});
