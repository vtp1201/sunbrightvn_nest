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
  // services = RELATION_DEFAULT.services,
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

export default {
  ATTRIBUTE,
  RELATION,
};
