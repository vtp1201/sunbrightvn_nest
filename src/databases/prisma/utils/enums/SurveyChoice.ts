import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from './default';

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

export enum RELATION {}

export enum INDEX {
  surveyId = `@@index([${ATTRIBUTE.surveyId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
