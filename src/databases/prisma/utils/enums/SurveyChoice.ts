import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  surveyId = 'surveyId',
  name = 'name',
  isContent = 'isContent',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  surveyId = 'survey_id',
  name = 'name',
  isContent = 'is_content',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  survey = RELATION_DEFAULT.survey,
  customerHasSurveyChoices = RELATION_DEFAULT.customerHasSurveyChoices,
}

const tableName = TABLE_NAME.SURVEY_CHOICE;
export enum INDEX_NAME {
  surveyId = `"${tableName}_${COLUMN.surveyId}_fkey"`,
}

export enum INDEX {
  surveyId = `@@index([${ATTRIBUTE.surveyId}], map: ${INDEX_NAME.surveyId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
