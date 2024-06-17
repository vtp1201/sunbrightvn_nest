import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/QuestionGroupHasQuestion';

export default createModel(
  MODEL_NAME.QUESTION_GROUP_HAS_QUESTION,
  (QuestionGroupHasQuestionModel) => {
    // defined Model
    process.nextTick(() => {
      QuestionGroupHasQuestionModel.int(ATTRIBUTE.questionGroupId, {
        map: COLUMN.questionGroupId,
      })
        .int(ATTRIBUTE.questionId, {
          map: COLUMN.questionId,
        })

        // indexes
        .id({
          fields: [ATTRIBUTE.questionGroupId, ATTRIBUTE.questionId],
        })

        // table name
        .map(TABLE_NAME.QUESTION_GROUP_HAS_QUESTION);
    });
  },
);
