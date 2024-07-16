import { createModel } from 'schemix';

import { answer, question, toolBusinessEntity } from '.';
import { deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Option';

export default createModel(MODEL_NAME.OPTION, (OptionModel) => {
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
  const answersRelation = oneToMany({
    model: answer,
    relation: RELATION.answers,
  });
  const questionRelation = oneToOne({
    attribute: ATTRIBUTE.questionId,
    model: question,
    relation: RELATION.question,
  });
  const toolBusinessEntitiesRelation = oneToMany({
    model: toolBusinessEntity,
    relation: RELATION.toolBusinessEntities,
  });

  // defined Model
  process.nextTick(() => {
    OptionModel.int(ATTRIBUTE.id, {
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
      .int(ATTRIBUTE.questionId, {
        map: COLUMN.questionId,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(answersRelation)
      .mixin(questionRelation)
      .mixin(toolBusinessEntitiesRelation)

      // indexes
      // .raw(INDEX.questionId)

      // table name
      .map(TABLE_NAME.OPTION);
  });
});
