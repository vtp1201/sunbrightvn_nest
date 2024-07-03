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

export enum INDEX {
  actionStepTypeId = `@@index([${ATTRIBUTE.actionStepTypeId}])`,
  companyId = `@@index([${ATTRIBUTE.companyId}])`,
  userId = `@@index([${ATTRIBUTE.userId}])`,
  taskId = `@@index([${ATTRIBUTE.taskId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
