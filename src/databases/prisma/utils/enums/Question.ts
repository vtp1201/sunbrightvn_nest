import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  content = 'content',
  questionParentId = 'questionParentId',
  isBelongToFatca = 'isBelongToFatca',
  questionTypeId = 'questionTypeId',
  questionPriorityId = 'questionPriorityId',
  description = 'description',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  content = 'content',
  questionParentId = 'question_parent_id',
  isBelongToFatca = 'is_belong_to_fatca',
  questionTypeId = 'question_type_id',
  questionPriorityId = 'question_priority_id',
  description = 'description',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  answers = RELATION_DEFAULT.answers,
  countries = RELATION_DEFAULT.countries,
  options = RELATION_DEFAULT.options,
  questionPriority = RELATION_DEFAULT.questionPriority,
  questionType = RELATION_DEFAULT.questionType,
  questionParent = RELATION_DEFAULT.questionParent,
  children = RELATION_DEFAULT.children,
  questionGroups = RELATION_DEFAULT.questionGroups,
}

export enum INDEX {
  questionPriorityId = `@@index([${ATTRIBUTE.questionPriorityId}])`,
  questionTypeId = `@@index([${ATTRIBUTE.questionTypeId}])`,
  questionParentId = `@@index([${ATTRIBUTE.questionParentId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
