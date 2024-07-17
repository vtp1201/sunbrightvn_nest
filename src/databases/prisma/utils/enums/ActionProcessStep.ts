import { TABLE_NAME } from '../constants/modelName';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

const tableName = TABLE_NAME.ACTION_PROCESS_STEP;
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

export enum RELATION {
  processStepParent = RELATION_DEFAULT.processStepParent,
  processStepChildren = RELATION_DEFAULT.processStepChildren,
  country = RELATION_DEFAULT.country,
  bank = RELATION_DEFAULT.bank,
  actionStepType = RELATION_DEFAULT.actionStepType,
  serviceType = RELATION_DEFAULT.serviceType,
}

export enum INDEX_NAME {
  processStepId = `"${tableName}_${COLUMN.processStepId}_fkey"`,
  nextProcessStepId = `"${tableName}_${COLUMN.nextProcessStepId}_fkey"`,
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
  bankId = `"${tableName}_${COLUMN.bankId}_fkey"`,
  actionStepTypeId = `"${tableName}_${COLUMN.actionStepTypeId}_fkey"`,
  serviceTypeId = `"${tableName}_${COLUMN.serviceTypeId}_fkey"`,
}

export enum INDEX {
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: ${INDEX_NAME.processStepId})`,
  nextProcessStepId = `@@index([${ATTRIBUTE.nextProcessStepId}], map: ${INDEX_NAME.nextProcessStepId})`,
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
  bankId = `@@index([${ATTRIBUTE.bankId}], map: ${INDEX_NAME.bankId})`,
  actionStepTypeId = `@@index([${ATTRIBUTE.actionStepTypeId}], map: ${INDEX_NAME.actionStepTypeId})`,
  serviceTypeId = `@@index([${ATTRIBUTE.serviceTypeId}], map: ${INDEX_NAME.serviceTypeId})`,
}

export default { ATTRIBUTE, RELATION };
