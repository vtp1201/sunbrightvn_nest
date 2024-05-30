import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/Answer';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.ANSWER, (AnswerModel) => {
  AnswerModel.int(ATTRIBUTE.id, {
    id: true,
    map: COLUMN.id,
    default: {
      autoincrement: true,
    },
  })
    .int(ATTRIBUTE.valueInt, {
      map: COLUMN.valueInt,
      optional: true,
    })
    .string(ATTRIBUTE.valueText, {
      map: COLUMN.valueText,
      optional: true,
      raw: RAW_STRING.TEXT,
    })
    .int(ATTRIBUTE.optionId, {
      map: COLUMN.optionId,
    })
    .int(ATTRIBUTE.taskId, {
      map: COLUMN.taskId,
      optional: true,
    })
    .int(ATTRIBUTE.fatcaId, {
      map: COLUMN.fatcaId,
      optional: true,
    })
    .int(ATTRIBUTE.selectCountryId, {
      map: COLUMN.selectCountryId,
      optional: true,
    })
    .int(ATTRIBUTE.companyMemberId, {
      map: COLUMN.companyMemberId,
      optional: true,
    })
    .int(ATTRIBUTE.questionId, {
      map: COLUMN.questionId,
      optional: true,
    })
    .int(ATTRIBUTE.companyId, {
      map: COLUMN.companyId,
      optional: true,
    })

    // dateTime marks
    .mixin(createdTime)
    .mixin(updatedTime)
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.ANSWER);
});
