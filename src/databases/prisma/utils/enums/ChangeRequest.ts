import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  taskId = 'taskId',
  companyId = 'companyId',
  changeRequestStatusId = 'changeRequestStatusId',
  companyMemberId = 'companyMemberId',
  companyPositionId = 'companyPositionId',
  toCompanyMemberId = 'toCompanyMemberId',
  toCompanyPositionId = 'toCompanyPositionId',
  isApproved = 'isApproved',
  changeRequestRelatedId = 'changeRequestRelatedId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  taskId = 'task_id',
  companyId = 'company_id',
  changeRequestStatusId = 'change_request_status_id',
  companyMemberId = 'company_member_id',
  companyPositionId = 'company_position_id',
  toCompanyMemberId = 'to_company_member_id',
  toCompanyPositionId = 'to_company_position_id',
  isApproved = 'is_approved',
  changeRequestRelatedId = 'change_request_related_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  company = RELATION_DEFAULT.company,
  companyMember = RELATION_DEFAULT.companyMember,
  toCompanyMember = RELATION_DEFAULT.toCompanyMember,
  toCompanyPosition = RELATION_DEFAULT.toCompanyPosition,
  companyPosition = RELATION_DEFAULT.companyPosition,
  changeRequestStatus = RELATION_DEFAULT.changeRequestStatus,
  task = RELATION_DEFAULT.task,
  changeRequestItems = RELATION_DEFAULT.changeRequestItems,
  files = RELATION_DEFAULT.files,
}

const tableName = TABLE_NAME.CHANGE_REQUEST;
export enum INDEX_NAME {
  companyId = `"${tableName}_${COLUMN.companyId}_fkey"`,
  companyMemberId = `"${tableName}_${COLUMN.companyMemberId}_fkey"`,
  toCompanyMemberId = `"${tableName}_${COLUMN.toCompanyMemberId}_fkey"`,
  toCompanyPositionId = `"${tableName}_${COLUMN.toCompanyPositionId}_fkey"`,
  companyPositionId = `"${tableName}_${COLUMN.companyPositionId}_fkey"`,
  changeRequestStatusId = `"${tableName}_${COLUMN.changeRequestStatusId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
}

export enum INDEX {
  companyId = `@@index([${ATTRIBUTE.companyId}], map: ${INDEX_NAME.companyId})`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: ${INDEX_NAME.companyMemberId})`,
  toCompanyMemberId = `@@index([${ATTRIBUTE.toCompanyMemberId}], map: ${INDEX_NAME.toCompanyMemberId})`,
  toCompanyPositionId = `@@index([${ATTRIBUTE.toCompanyPositionId}], map: ${INDEX_NAME.toCompanyPositionId})`,
  companyPositionId = `@@index([${ATTRIBUTE.companyPositionId}], map: ${INDEX_NAME.companyPositionId})`,
  changeRequestStatusId = `@@index([${ATTRIBUTE.changeRequestStatusId}], map: ${INDEX_NAME.changeRequestStatusId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
