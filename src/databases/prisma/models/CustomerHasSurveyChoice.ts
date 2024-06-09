import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CustomerHasSurveyChoice';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.CUSTOMER_HAS_SURVEY_CHOICE,
  (CustomerHasSurveyChoiceModel) => {
    const initCreatedTime = createdTime({
      attribute: ATTRIBUTE.createdTime,
      column: COLUMN.createdTime,
    });
    const initUpdatedTime = updatedTime({
      attribute: ATTRIBUTE.updatedTime,
      column: COLUMN.updatedTime,
    });
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
      CustomerHasSurveyChoiceModel.int(ATTRIBUTE.customerId, {
        map: COLUMN.customerId,
      })
        .int(ATTRIBUTE.surveyChoiceId, {
          map: COLUMN.surveyChoiceId,
        })
        .string(ATTRIBUTE.surveyContent, {
          map: COLUMN.surveyContent,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // ids
        .id({
          fields: [ATTRIBUTE.customerId, ATTRIBUTE.surveyChoiceId],
        })

        // indexes
        .raw('@@index([customerId])')

        // table name
        .map(TABLE_NAME.CUSTOMER_HAS_SURVEY_CHOICE);
    });
  },
);
