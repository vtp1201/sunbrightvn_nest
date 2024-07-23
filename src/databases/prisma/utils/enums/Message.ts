import { TABLE_NAME } from '../constants';
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

const tableName = TABLE_NAME.CLICK;
export enum INDEX_NAME {
  supportCaseId = `"${tableName}_${COLUMN.supportCaseId}_fkey"`,
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
}

export enum INDEX {
  supportCaseId = `@@index([${ATTRIBUTE.supportCaseId}], map: ${INDEX_NAME.supportCaseId})`,
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
