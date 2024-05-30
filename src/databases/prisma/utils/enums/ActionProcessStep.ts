import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  processStepId = 'processStepId',
  nextProcessStepId = 'nextProcessStepId',
  countryId = 'countryId',
  bankId = 'bankId',
  priority = 'priority',
  serviceTypeId = 'serviceTypeId',
  actionStepTypeId = 'actionStepTypeId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  processStepId = 'process_step_id',
  nextProcessStepId = 'next_process_step_id',
  countryId = 'country_id',
  bankId = 'bank_id',
  priority = 'priority',
  serviceTypeId = 'service_type_id',
  actionStepTypeId = 'action_step_type_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {}

export default { ATTRIBUTE, RELATION };
