import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  taskId = 'taskId',
  processStepId = 'processStepId',
  personId = 'personId',
  userId = 'userId',
  isApproved = 'isApproved',
  isRejected = 'isRejected',
  isTerminated = 'isTerminated',
  finishedTime = ATTRIBUTE_DEFAULT.finishedTime,
  remindStartTime = 'remindStartTime',
  status = 'status',
  bankingProcessId = 'bankingProcessId',
  additionProcessId = 'additionProcessId',
  priority = 'priority',
  description = 'description',
  parentId = 'parentId',
  extraValue = 'extraValue',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  taskId = 'task_id',
  processStepId = 'process_step_id',
  personId = 'person_id',
  userId = 'user_id',
  isApproved = 'is_approved',
  isRejected = 'is_rejected',
  isTerminated = 'is_terminated',
  finishedTime = COLUMN_DEFAULT.finishedTime,
  remindStartTime = 'remind_start_time',
  status = 'status',
  bankingProcessId = 'banking_process_id',
  additionProcessId = 'addition_process_id',
  priority = 'priority',
  description = 'description',
  parentId = 'parent_id',
  extraValue = 'extra_value',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  emails = RELATION_DEFAULT.emails,
  emailTriggerHasProcesses = RELATION_DEFAULT.emailTriggerHasProcesses,
  additionProcess = RELATION_DEFAULT.additionProcess,
  bankingProcess = RELATION_DEFAULT.bankingProcess,
  person = RELATION_DEFAULT.person,
  processStep = RELATION_DEFAULT.processStep,
  task = RELATION_DEFAULT.task,
  user = RELATION_DEFAULT.user,
  notes = RELATION_DEFAULT.notes,
  parents = RELATION_DEFAULT.parents,
  children = RELATION_DEFAULT.children,
  processLogs = RELATION_DEFAULT.processLogs,
}

const tableName = TABLE_NAME.PROCESS;
export enum INDEX_NAME {
  additionProcessId = `"${tableName}_${COLUMN.additionProcessId}_fkey"`,
  bankingProcessId = `"${tableName}_${COLUMN.bankingProcessId}_fkey"`,
  personId = `"${tableName}_${COLUMN.personId}_fkey"`,
  processStepId = `"${tableName}_${COLUMN.processStepId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
}

export enum INDEX {
  additionProcessId = `@@index([${ATTRIBUTE.additionProcessId}], map: ${INDEX_NAME.additionProcessId})`,
  bankingProcessId = `@@index([${ATTRIBUTE.bankingProcessId}], map: ${INDEX_NAME.bankingProcessId})`,
  personId = `@@index([${ATTRIBUTE.personId}], map: ${INDEX_NAME.personId})`,
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: ${INDEX_NAME.processStepId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
}

export default {
  ATTRIBUTE,
  COLUMN,
  RELATION,
};
