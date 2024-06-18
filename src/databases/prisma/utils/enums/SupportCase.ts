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
}

export enum INDEX {
  supportCasePriorityId = `@@index([${ATTRIBUTE.supportCasePriorityId}], map: "fk_sup_support_case_priority_id_sup_id_3hj0")`,
  supportCaseStatusId = `@@index([${ATTRIBUTE.supportCaseStatusId}], map: "fk_sup_support_case_status_id_sup_id_fe69")`,
  supportCaseTypeId = `@@index([${ATTRIBUTE.supportCaseTypeId}], map: "fk_sup_support_case_type_id_sup_id_3ntx")`,
  userId = `@@index([${ATTRIBUTE.userId}], map: "fk_sup_user_id_use_id_ge4h")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
