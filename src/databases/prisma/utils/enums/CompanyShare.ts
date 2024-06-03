import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  taskId = 'taskId',
  no = 'no',
  companyId = 'companyId',
  companyMemberId = 'companyMemberId',
  companyPositionId = 'companyPositionId',
  corporationCompanyMemberId = 'corporationCompanyMemberId',
  startNumber = 'startNumber',
  endNumber = 'endNumber',
  value = 'value',
  isValid = 'isValid',
  isApproved = 'isApproved',
  issuedFileId = 'issuedFileId',
  issuedDated = 'issuedDated',
  expiredDated = 'expiredDated',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  taskId = 'task_id',
  no = 'no',
  companyId = 'company_id',
  companyMemberId = 'company_member_id',
  companyPositionId = 'company_position_id',
  corporationCompanyMemberId = 'corporation_company_member_id',
  startNumber = 'start_number',
  endNumber = 'end_number',
  value = 'value',
  isValid = 'is_valid',
  isApproved = 'is_approved',
  issuedFileId = 'issued_file_id',
  issuedDated = 'issued_dated',
  expiredDated = 'expired_dated',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  file = RELATION_DEFAULT.file,
  company = RELATION_DEFAULT.company,
  companyMember = RELATION_DEFAULT.companyMember,
  corporationCompanyMember = RELATION_DEFAULT.corporationCompanyMember,
  companyPosition = RELATION_DEFAULT.companyPosition,
  task = RELATION_DEFAULT.task,
}

export default {
  ATTRIBUTE,
  RELATION,
};
