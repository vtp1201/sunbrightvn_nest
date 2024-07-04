import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  companyMemberTypeId = 'companyMemberTypeId',
  changeRequestStatusId = 'changeRequestStatusId',
  name = 'name',
  description = 'description',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  companyMemberTypeId = 'company_member_type_id',
  changeRequestStatusId = 'change_request_status_id',
  name = 'name',
  description = 'description',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  changeRequestStatus = RELATION_DEFAULT.changeRequestStatus,
  companyMemberType = RELATION_DEFAULT.companyMemberType,
  fileTemplates = RELATION_DEFAULT.fileTemplates,
}

export enum INDEX {
  companyMemberTypeId = `@@index([${ATTRIBUTE.companyMemberTypeId}])`,
  changeRequestStatusId = `@@index([${ATTRIBUTE.changeRequestStatusId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
