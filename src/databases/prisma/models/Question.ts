import { createModel } from 'schemix';

import {
  answer,
  country,
  option,
  question,
  questionGroup,
  questionPriority,
  questionType,
} from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Question';

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

  // defined Relations
  const answersRelation = oneToMany({
    model: answer,
    relation: RELATION.answers,
  });
  const countriesRelation = oneToMany({
    model: country,
    relation: RELATION.countries,
  });
  const optionsRelation = oneToMany({
    model: option,
    relation: RELATION.options,
  });
  const questionPriorityRelation = oneToOne({
    attribute: ATTRIBUTE.questionPriorityId,
    model: questionPriority,
    relation: RELATION.questionPriority,
    option: { optional: true },
  });
  const questionTypeRelation = oneToOne({
    attribute: ATTRIBUTE.questionTypeId,
    model: questionType,
    relation: RELATION.questionType,
  });
  const questionParentRelation = oneToOne({
    attribute: ATTRIBUTE.questionParentId,
    model: question,
    relation: RELATION.questionParent,
    isNeedName: true,
    option: { optional: true },
  });
  const children = oneToMany({
    model: question,
    relation: RELATION.children,
    fromRelation: RELATION.questionParent,
  });
  const questionGroups = oneToMany({
    model: questionGroup,
    relation: RELATION.questionGroups,
  });

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

      // relations
      .mixin(answersRelation)
      .mixin(countriesRelation)
      .mixin(optionsRelation)
      .mixin(questionPriorityRelation)
      .mixin(questionTypeRelation)
      .mixin(questionParentRelation)
      .mixin(children)
      .mixin(questionGroups)

      // indexes
      // .raw(INDEX.questionParentId)
      // .raw(INDEX.questionPriorityId)
      // .raw(INDEX.questionTypeId)

      // table name
      .map(TABLE_NAME.QUESTION);
  });
});
