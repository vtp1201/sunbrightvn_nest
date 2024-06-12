import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  userId = 'userId',
  content = 'content',
  supportCaseId = 'supportCaseId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  userId = 'user_id',
  content = 'content',
  supportCaseId = 'support_case_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  files = RELATION_DEFAULT.files,
  user = RELATION_DEFAULT.user,
  supportCase = RELATION_DEFAULT.supportCase,
}

export enum INDEX {
  supportCaseId = `@@index([${ATTRIBUTE.supportCaseId}], map: "fk_mes_support_case_id_sup_id_1au7")`,
  userId = `@@index([${ATTRIBUTE.userId}], map: "fk_mes_user_id_use_id_1n2l")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
