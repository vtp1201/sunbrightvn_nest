import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CountryHasQuestion';

export default createModel(
  MODEL_NAME.COUNTRY_HAS_QUESTION,
  (CountryHasQuestionModel) => {
    CountryHasQuestionModel.int(ATTRIBUTE.countryId, {
      map: COLUMN.countryId,
    })
      .int(ATTRIBUTE.questionId, {
        map: COLUMN.questionId,
      })
      .id({
        fields: [ATTRIBUTE.countryId, ATTRIBUTE.questionId],
      })

      // table name
      .map(TABLE_NAME.COUNTRY_HAS_QUESTION);
  },
);
