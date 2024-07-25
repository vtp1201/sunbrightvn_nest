import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  companyMemberId = 'companyMemberId',
  companyMemberIssueReferenceId = 'companyMemberIssueReferenceId',
  name = 'name',
  phoneNumber = 'phoneNumber',
  phoneCountryId = 'phoneCountryId',
  fax = 'fax',
  email = 'email',
  address = 'address',
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
  phoneCountry = RELATION_DEFAULT.phoneCountry,
}

const tableName = TABLE_NAME.COMPANY_MEMBER_REFERENCES;
export enum INDEX_NAME {
  companyMemberId = `"${tableName}_${COLUMN.companyMemberId}_fkey"`,
  companyMemberIssueReferenceId = `"${tableName}_company_member_issuse_reference_i_fkey"`, // trường hợp đặc biệt index name phải bé hơn hoặc bằng 64 ký tự
  phoneCountryId = `"${tableName}_${COLUMN.phoneCountryId}_fkey"`,
}

export enum INDEX {
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: ${INDEX_NAME.companyMemberId})`,
  companyMemberIssueReferenceId = `@@index([${ATTRIBUTE.companyMemberIssueReferenceId}], map: ${INDEX_NAME.companyMemberIssueReferenceId})`,
  phoneCountryId = `@@index([${ATTRIBUTE.phoneCountryId}], map: ${INDEX_NAME.phoneCountryId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
