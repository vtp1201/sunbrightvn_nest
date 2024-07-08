import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CountryHasQuestion';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.COUNTRY_HAS_QUESTION,
  (CountryHasQuestionModel) => {
    // relations
    const countryHasQuestion = manyToMany({
      attributeA: ATTRIBUTE.countryId,
      attributeB: ATTRIBUTE.questionId,
      modelNameA: MODEL_NAME.COUNTRY,
      modelNameB: MODEL_NAME.QUESTION,
    });
    process.nextTick(() => {
      CountryHasQuestionModel.int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
        .int(ATTRIBUTE.questionId, {
          map: COLUMN.questionId,
        })
        .mixin(countryHasQuestion);
    });
  },
);
