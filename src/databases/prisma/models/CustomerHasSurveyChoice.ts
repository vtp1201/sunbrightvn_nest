import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CustomerHasSurveyChoice';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.CUSTOMER_HAS_SURVEY_CHOICE,
  (CustomerHasSurveyChoiceModel) => {
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
      .mixin(createdTime)
      .mixin(updatedTime)
      .mixin(deleted)

      .id({
        fields: [ATTRIBUTE.customerId, ATTRIBUTE.surveyChoiceId],
      })

      .raw('@@index([customerId], map: "fk_cus_customer_id_cus_id_5h8l")')
      // table name
      .map(TABLE_NAME.CUSTOMER_HAS_SURVEY_CHOICE);
  },
);
