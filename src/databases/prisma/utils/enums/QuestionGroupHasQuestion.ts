import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  questionGroupId = 'questionGroupId',
  questionId = 'questionId',
}

export enum COLUMN {
  questionGroupId = 'question_group_id',
  questionId = 'question_id',
}

export enum RELATION {
  question = RELATION_DEFAULT.question,
  questionGroup = RELATION_DEFAULT.questionGroup,
}

export enum INDEX {}

export default {
  ATTRIBUTE,
  RELATION,
};
