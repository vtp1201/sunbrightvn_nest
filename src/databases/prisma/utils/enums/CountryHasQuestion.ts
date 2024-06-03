import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  countryId = 'countryId',
  questionId = 'questionId',
}

export enum COLUMN {
  countryId = 'country_id',
  questionId = 'question_id',
}

export enum RELATION {
  question = RELATION_DEFAULT.question,
  country = RELATION_DEFAULT.country,
}

export default {
  ATTRIBUTE,
  RELATION,
};
