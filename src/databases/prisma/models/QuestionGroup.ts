import { createModel } from 'schemix';

import { file, fileTemplate, question } from '.';
import { deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/QuestionGroup';

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

  // defined Relations
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  const questionsRelation = oneToMany({
    model: question,
    relation: RELATION.questions,
  });
  const fileTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.fileTemplateId,
    model: fileTemplate,
    relation: RELATION.fileTemplate,
    option: { optional: true },
  });

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

      // relations
      .mixin(filesRelation)
      .mixin(questionsRelation)
      .mixin(fileTemplateRelation)

      // table name
      .map(TABLE_NAME.QUESTION_GROUP);
  });
});
