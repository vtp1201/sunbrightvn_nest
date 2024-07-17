import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  valueInt = 'valueInt',
  valueText = 'valueText',
  optionId = 'optionId',
  taskId = 'taskId',
  fatcaId = 'fatcaId',
  selectCountryId = 'selectCountryId',
  companyMemberId = 'companyMemberId',
  questionId = 'questionId',
  companyId = 'companyId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  valueInt = 'value_int',
  valueText = 'value_text',
  optionId = 'option_id',
  taskId = 'task_id',
  fatcaId = 'fatca_id',
  selectCountryId = 'select_country_id',
  companyMemberId = 'company_member_id',
  questionId = 'question_id',
  companyId = 'company_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  companyMember = RELATION_DEFAULT.companyMember,
  option = RELATION_DEFAULT.option,
  question = RELATION_DEFAULT.question,
  country = RELATION_DEFAULT.country,
  task = RELATION_DEFAULT.task,
  company = RELATION_DEFAULT.company,
}

const tableName = TABLE_NAME.ANSWER;
export enum INDEX_NAME {
  optionId = `"${tableName}_${COLUMN.optionId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
  fatcaId = `"${tableName}_${COLUMN.fatcaId}_fkey"`,
  selectCountryId = `"${tableName}_${COLUMN.selectCountryId}_fkey"`,
  companyMemberId = `"${tableName}_${COLUMN.companyMemberId}_fkey"`,
  questionId = `"${tableName}_${COLUMN.questionId}_fkey"`,
  companyId = `"${tableName}_${COLUMN.companyId}_fkey"`,
}

export enum INDEX {
  optionId = `@@index([${ATTRIBUTE.optionId}], map: ${INDEX_NAME.optionId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
  fatcaId = `@@index([${ATTRIBUTE.fatcaId}], map: ${INDEX_NAME.fatcaId})`,
  selectCountryId = `@@index([${ATTRIBUTE.selectCountryId}], map: ${INDEX_NAME.selectCountryId})`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: ${INDEX_NAME.companyMemberId})`,
  questionId = `@@index([${ATTRIBUTE.questionId}], map: ${INDEX_NAME.questionId})`,
  companyId = `@@index([${ATTRIBUTE.companyId}], map: ${INDEX_NAME.companyId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
