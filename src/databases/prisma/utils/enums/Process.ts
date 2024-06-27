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
  additionProcess = 'addition_process',
  bankingProcess = 'banking_process',
  person = RELATION_DEFAULT.person,
  processStep = 'process_step',
  task = 'task',
  user = RELATION_DEFAULT.user,
  processHasNote = 'process_has_note',
  processHasParentProcessParent = 'process_has_parent_process_process_has_parent_process_parent_process_idToprocess',
  processHasParentProcessProcess = 'process_has_parent_process_process_has_parent_process_process_idToprocess',
  processLog = 'process_log',
  email = 'email',
  emailTriggerHasProcess = 'email_trigger_has_process',
}

export enum INDEX {
  additionProcessId = `@@index([${ATTRIBUTE.additionProcessId}])`,
  bankingProcessId = `@@index([${ATTRIBUTE.bankingProcessId}])`,
  personId = `@@index([${ATTRIBUTE.personId}])`,
  processStepId = `@@index([${ATTRIBUTE.processStepId}])`,
  taskId = `@@index([${ATTRIBUTE.taskId}])`,
  userId = `@@index([${ATTRIBUTE.userId}])`,
}

export default {
  ATTRIBUTE,
  COLUMN,
  RELATION,
};
