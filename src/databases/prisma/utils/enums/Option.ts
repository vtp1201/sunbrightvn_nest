import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  content = 'content',
  questionId = 'questionId',
  description = 'description',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  content = 'content',
  questionId = 'question_id',
  description = 'description',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  answers = RELATION_DEFAULT.answers,
  question = RELATION_DEFAULT.question,
  toolBusinessEntities = RELATION_DEFAULT.toolBusinessEntities,
}

const tableName = TABLE_NAME.OPTION;
export enum INDEX_NAME {
  questionId = `"${tableName}_${COLUMN.questionId}_fkey"`,
}

export enum INDEX {
  questionId = `@@index([${ATTRIBUTE.questionId}], map: ${INDEX_NAME.questionId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
