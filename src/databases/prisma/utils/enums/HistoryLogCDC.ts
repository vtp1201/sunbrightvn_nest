import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  userId = 'userId',
  taskId = 'taskId',
  actionStepTypeId = 'actionStepTypeId',
  companyId = 'companyId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  userId = 'user_id',
  taskId = 'task_id',
  actionStepTypeId = 'action_step_type_id',
  companyId = 'company_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  historyFiles = RELATION_DEFAULT.historyFiles,
  actionStepType = RELATION_DEFAULT.actionStepType,
  company = RELATION_DEFAULT.company,
  task = RELATION_DEFAULT.task,
  user = RELATION_DEFAULT.user,
}

const tableName = TABLE_NAME.HISTORY_LOG_CDC;
export enum INDEX_NAME {
  actionStepTypeId = `"${tableName}_${COLUMN.actionStepTypeId}_fkey"`,
  companyId = `"${tableName}_${COLUMN.companyId}_fkey"`,
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
}

export enum INDEX {
  actionStepTypeId = `@@index([${ATTRIBUTE.actionStepTypeId}], map: ${INDEX_NAME.actionStepTypeId})`,
  companyId = `@@index([${ATTRIBUTE.companyId}], map: ${INDEX_NAME.companyId})`,
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
