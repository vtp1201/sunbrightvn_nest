import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/QuestionGroup';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.QUESTION_GROUP, (QuestionGroupModel) => {
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
    QuestionGroupModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_200,
      })
      .int(ATTRIBUTE.left, {
        map: COLUMN.left,
        optional: true,
      })
      .int(ATTRIBUTE.right, {
        map: COLUMN.right,
        optional: true,
      })
      .int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
        optional: true,
      })
      .int(ATTRIBUTE.order, {
        map: COLUMN.order,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.QUESTION_GROUP);
  });
});
