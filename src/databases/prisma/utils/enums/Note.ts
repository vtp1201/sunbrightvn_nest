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
  processHasNotes = RELATION_DEFAULT.processHasNotes,
}

export enum INDEX {
  userId = `@@index([${ATTRIBUTE.userId}], map: "fk_not_user_id_use_id_bxzk")`,
  companyId = `@@index([${ATTRIBUTE.companyId}], map: "fk_note_company_idx")`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: "fk_note_company_member_id_idx")`,
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: "fk_note_process_step_id_idx")`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: "fk_note_task_id_idx")`,
  noteTypeId = `@@index([${ATTRIBUTE.noteTypeId}], map: "fk_note_type_id_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
