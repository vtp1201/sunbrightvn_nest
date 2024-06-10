import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  type = 'type',
  serviceTypeIds = 'serviceTypeIds',
  processStepId = 'processStepId',
  isRemindAgent = 'isRemindAgent',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  type = 'type',
  serviceTypeIds = 'service_type_ids',
  processStepId = 'process_step_id',
  isRemindAgent = 'is_remind_agent',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  processStep = RELATION_DEFAULT.processStep,
  emailTriggerHasProcesses = RELATION_DEFAULT.emailTriggerHasProcesses,
}

export enum INDEX {
  processStepId = '@@index([process_step_id], map: "fk_ema_process_step_id_pro_id_c9l8")',
}

export default {
  ATTRIBUTE,
  RELATION,
};
