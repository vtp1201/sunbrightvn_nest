import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  title = 'title',
  description = 'description',
  taskId = 'taskId',
  companyMemberId = 'companyMemberId',
  isBelongToClient = 'isBelongToClient',
  userId = 'userId',
  noteTypeId = 'noteTypeId',
  companyId = 'companyId',
  parentId = 'parentId',
  noteStatusId = 'noteStatusId',
  isComplianceReject = 'isComplianceReject',
  processStepId = 'processStepId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  title = 'title',
  description = 'description',
  taskId = 'task_id',
  companyMemberId = 'company_member_id',
  isBelongToClient = 'is_belong_to_client',
  userId = 'user_id',
  noteTypeId = 'note_type_id',
  companyId = 'company_id',
  parentId = 'parent_id',
  noteStatusId = 'note_status_id',
  isComplianceReject = 'is_compliance_reject',
  processStepId = 'process_step_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  company = RELATION_DEFAULT.company,
  companyMember = RELATION_DEFAULT.companyMember,
  noteType = RELATION_DEFAULT.noteType,
  task = RELATION_DEFAULT.task,
  user = RELATION_DEFAULT.user,
  processStep = RELATION_DEFAULT.processStep,
  files = RELATION_DEFAULT.files,
  processes = RELATION_DEFAULT.processes,
}

const tableName = TABLE_NAME.NOTE;
export enum INDEX_NAME {
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
  companyId = `"${tableName}_${COLUMN.companyId}_fkey"`,
  companyMemberId = `"${tableName}_${COLUMN.companyMemberId}_fkey"`,
  processStepId = `"${tableName}_${COLUMN.processStepId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
  noteTypeId = `"${tableName}_${COLUMN.noteTypeId}_fkey"`,
}

export enum INDEX {
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
  companyId = `@@index([${ATTRIBUTE.companyId}], map: ${INDEX_NAME.companyId})`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: ${INDEX_NAME.companyMemberId})`,
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: ${INDEX_NAME.processStepId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
  noteTypeId = `@@index([${ATTRIBUTE.noteTypeId}], map: ${INDEX_NAME.noteTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
