import { createModel } from 'schemix';

import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Answer';
import { company, companyMember, country, option, question, task } from './';

export default createModel(MODEL_NAME.ANSWER, (AnswerModel) => {
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
  const optionRelation = oneToOne({
    attribute: ATTRIBUTE.optionId,
    model: option,
    relation: RELATION.option,
    map: INDEX_NAME.optionId,
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    model: task,
    relation: RELATION.task,
    map: INDEX_NAME.taskId,
    option: { optional: true },
  });
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    model: companyMember,
    relation: RELATION.companyMember,
    map: INDEX_NAME.companyMemberId,
    option: { optional: true },
  });
  const questionRelation = oneToOne({
    attribute: ATTRIBUTE.questionId,
    model: question,
    relation: RELATION.question,
    option: { optional: true, map: INDEX_NAME.questionId },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.selectCountryId,
    model: country,
    relation: RELATION.country,
    map: INDEX_NAME.selectCountryId,
    option: { optional: true },
  });
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
    map: INDEX_NAME.companyId,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
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
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(optionRelation)
      .mixin(companyMemberRelation)
      .mixin(taskRelation)
      .mixin(questionRelation)
      .mixin(countryRelation)
      .mixin(companyRelation)

      // indexes
      .raw(INDEX.companyId)
      .raw(INDEX.companyMemberId)
      .raw(INDEX.fatcaId)
      .raw(INDEX.optionId)
      .raw(INDEX.questionId)
      .raw(INDEX.selectCountryId)
      .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.ANSWER);
  });
});
