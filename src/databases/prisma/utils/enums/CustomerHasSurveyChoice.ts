import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  customerId = 'customerId',
  surveyChoiceId = 'surveyChoiceId',
  surveyContent = 'surveyContent',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  customerId = 'customer_id',
  surveyChoiceId = 'survey_choice_id',
  surveyContent = 'survey_content',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  customer = RELATION_DEFAULT.customer,
  surveyChoice = RELATION_DEFAULT.surveyChoice,
}

export enum INDEX {
  customerId = `@@index([${ATTRIBUTE.customerId}])`,
  surveyChoiceId = `@@index([${ATTRIBUTE.surveyChoiceId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
