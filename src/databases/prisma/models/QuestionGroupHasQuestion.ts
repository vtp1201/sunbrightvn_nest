import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/QuestionGroupHasQuestion';

export default createModel(
  MODEL_NAME.QUESTION_GROUP_HAS_QUESTION,
  (QuestionGroupHasQuestionModel) => {
    // relations
    const questionGroupHasQuestion = manyToMany({
      attributeA: ATTRIBUTE.questionGroupId,
      attributeB: ATTRIBUTE.questionId,
      modelNameA: MODEL_NAME.QUESTION_GROUP,
      modelNameB: MODEL_NAME.QUESTION,
    });

    // defined Model
    process.nextTick(() => {
      QuestionGroupHasQuestionModel.int(ATTRIBUTE.questionGroupId, {
        map: COLUMN.questionGroupId,
      })
        .int(ATTRIBUTE.questionId, {
          map: COLUMN.questionId,
        })

        .mixin(questionGroupHasQuestion);
    });
  },
);
