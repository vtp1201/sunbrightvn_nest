import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  phoneNumber = 'phoneNumber',
  phoneCountryId = 'phoneCountryId',
  fax = 'fax',
  email = 'email',
  address = 'address',
  companyMemberIssueReferenceId = 'companyMemberIssueReferenceId',
  companyMemberId = 'companyMemberId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  phoneNumber = 'phone_number',
  phoneCountryId = 'phone_country_id',
  fax = 'fax',
  email = 'email',
  address = 'address',
  companyMemberIssueReferenceId = 'company_member_issuse_reference_id',
  companyMemberId = 'company_member_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  companyMember = RELATION_DEFAULT.companyMember,
  companyMemberIssueReference = RELATION_DEFAULT.companyMemberIssueReference,
  country = RELATION_DEFAULT.country,
}

export default {
  ATTRIBUTE,
  RELATION,
};
