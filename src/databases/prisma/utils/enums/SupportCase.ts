import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  subject = 'subject',
  userId = 'userId',
  supportCaseTypeId = 'supportCaseTypeId',
  supportCaseStatusId = 'supportCaseStatusId',
  supportCasePriorityId = 'supportCasePriorityId',
  point = 'point',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  subject = 'subject',
  userId = 'user_id',
  supportCaseTypeId = 'support_case_type_id',
  supportCaseStatusId = 'support_case_status_id',
  supportCasePriorityId = 'support_case_priority_id',
  point = 'point',
  createdTime = COLUMN_DEFAULT.createdTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  messages = RELATION_DEFAULT.messages,
  supportCasePriority = RELATION_DEFAULT.supportCasePriority,
  supportCaseStatus = RELATION_DEFAULT.supportCaseStatus,
  supportCaseType = RELATION_DEFAULT.supportCaseType,
  user = RELATION_DEFAULT.user,
  orders = RELATION_DEFAULT.orders,
}

export enum INDEX {
  supportCasePriorityId = `@@index([${ATTRIBUTE.supportCasePriorityId}])`,
  supportCaseStatusId = `@@index([${ATTRIBUTE.supportCaseStatusId}])`,
  supportCaseTypeId = `@@index([${ATTRIBUTE.supportCaseTypeId}])`,
  userId = `@@index([${ATTRIBUTE.userId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
