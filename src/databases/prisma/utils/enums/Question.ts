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
  options = RELATION_DEFAULT.options,
  questionPriority = RELATION_DEFAULT.questionPriority,
  questionType = RELATION_DEFAULT.questionType,
  questionParent = RELATION_DEFAULT.questionParent,
}

export enum INDEX {
  questionPriorityId = `@@index([${ATTRIBUTE.questionPriorityId}], map: "fk_question_priority_idx_idx")`,
  questionTypeId = `@@index([${ATTRIBUTE.questionTypeId}], map: "fk_question_type_idx")`,
  questionParentId = `@@index([${ATTRIBUTE.questionParentId}], map: "fk_taque_question_parent_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
