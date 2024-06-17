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
  finishedTime = 'finishedTime',
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
  finishedTime = 'finished_time',
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
  additionProcessId = `@@index([${ATTRIBUTE.additionProcessId}], map: "fk_pro_addition_process_id_add_id_9meh")`,
  bankingProcessId = `@@index([${ATTRIBUTE.bankingProcessId}], map: "fk_pro_banking_process_id_ban_id_1ta5")`,
  personId = `@@index([${ATTRIBUTE.personId}], map: "fk_pro_person_id_per_id_4mwi")`,
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: "fk_pro_process_step_id_pro_id_jv5i")`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: "fk_pro_task_id_tas_id_egl0")`,
  userId = `@@index([${ATTRIBUTE.userId}], map: "fk_pro_user_id_use_id_110w")`,
}

export default {
  ATTRIBUTE,
  COLUMN,
  RELATION,
};
