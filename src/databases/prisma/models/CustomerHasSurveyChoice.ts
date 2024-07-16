import { createModel } from 'schemix';

import { customer, surveyChoice } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CustomerHasSurveyChoice';

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

    // defined relations
    const customerRelation = oneToOne({
      attribute: ATTRIBUTE.customerId,
      model: customer,
      relation: RELATION.customer,
    });
    const surveyChoiceRelation = oneToOne({
      attribute: ATTRIBUTE.surveyChoiceId,
      model: surveyChoice,
      relation: RELATION.surveyChoice,
    });

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

        // relations
        .mixin(customerRelation)
        .mixin(surveyChoiceRelation)

        // ids
        .id({
          fields: [ATTRIBUTE.customerId, ATTRIBUTE.surveyChoiceId],
        })

        // indexes
        // .raw('@@index([customerId])')

        // table name
        .map(TABLE_NAME.CUSTOMER_HAS_SURVEY_CHOICE);
    });
  },
);
