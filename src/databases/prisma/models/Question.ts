import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Question';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.QUESTION, (QuestionModel) => {
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
    QuestionModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.content, {
        map: COLUMN.content,
        raw: RAW_STRING.TEXT,
      })
      .boolean(ATTRIBUTE.isBelongToFatca, {
        map: COLUMN.isBelongToFatca,
        default: false,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.questionParentId, {
        map: COLUMN.questionParentId,
        optional: true,
      })
      .int(ATTRIBUTE.questionTypeId, {
        map: COLUMN.questionTypeId,
      })
      .int(ATTRIBUTE.questionPriorityId, {
        map: COLUMN.questionPriorityId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.questionParentId)
      .raw(INDEX.questionPriorityId)
      .raw(INDEX.questionTypeId)

      // table name
      .map(TABLE_NAME.QUESTION);
  });
});
