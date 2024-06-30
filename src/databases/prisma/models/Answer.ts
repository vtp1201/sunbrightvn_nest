import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Answer';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import CompanyMember from './CompanyMember';
import Option from './Option';
import Question from './Question';
import Country from './Country';
import Company from './Company';

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
    model: Option,
    relation: RELATION.option,
  });
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    model: CompanyMember,
    relation: RELATION.companyMember,
    option: { optional: true },
  });
  const questionRelation = oneToOne({
    attribute: ATTRIBUTE.questionId,
    model: Question,
    relation: RELATION.question,
    option: { optional: true },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.selectCountryId,
    model: Country,
    relation: RELATION.country,
    option: { optional: true },
  });
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: Company,
    relation: RELATION.company,
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
      .mixin(questionRelation)
      .mixin(countryRelation)
      .mixin(companyRelation)

      // table name
      .map(TABLE_NAME.ANSWER);
  });
});
