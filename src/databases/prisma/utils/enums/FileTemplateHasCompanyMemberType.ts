import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  fileTemplateId = 'fileTemplateId',
  companyMemberTypeId = 'companyMemberTypeId',
  typeMemberId = 'typeMemberId',
  isSignedByAll = 'isSignedByAll',
  isSignedByAppointed = 'isSignedByAppointed',
  isSignedByIndividual = 'isSignedByIndividual',
  isSignedTransfer = 'isSignedTransfer',
  isSignedByOldestMember = 'isSignedByOldestMember',
  generatedFor = 'generatedFor',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  fileTemplateId = 'file_template_id',
  companyMemberTypeId = 'company_member_type_id',
  typeMemberId = 'type_member_id',
  isSignedByAll = 'is_signed_by_all',
  isSignedByAppointed = 'is_signed_by_appointed',
  isSignedByIndividual = 'is_signed_by_individual',
  isSignedTransfer = 'is_signed_transfer',
  isSignedByOldestMember = 'is_signed_by_oldest_member',
  generatedFor = 'generated_for',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  companyMemberType = RELATION_DEFAULT.companyMemberType,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
  typeMember = RELATION_DEFAULT.typeMember,
}

const tableName = TABLE_NAME.FILE_TEMPLATE_HAS_COMPANY_MEMBER_TYPE;
export enum INDEX_NAME {
  typeMemberId = `"${tableName}_${COLUMN.typeMemberId}_fkey"`,
  fileTemplateId = `"${tableName}_${COLUMN.fileTemplateId}_fkey"`,
  companyMemberTypeId = `"${tableName}_${COLUMN.companyMemberTypeId}_fkey"`,
}

export enum INDEX {
  typeMemberId = `@@index([${ATTRIBUTE.typeMemberId}], map: ${INDEX_NAME.typeMemberId})`,
  fileTemplateId = `@@index([${ATTRIBUTE.fileTemplateId}], map: ${INDEX_NAME.fileTemplateId})`,
  companyMemberTypeId = `@@index([${ATTRIBUTE.companyMemberTypeId}], map: ${INDEX_NAME.companyMemberTypeId})`,
}

export enum GENERATED_FOR {
  FOR_ONE = 'FOR_ONE',
  FOR_ALL = 'FOR_ALL',
  FOR_ALL_LEVEL = 'FOR_ALL_LEVEL',
  FOR_NEW_MEMBER = 'FOR_NEW_MEMBER',
  FOR_REMOVE_MEMBER = 'FOR_REMOVE_MEMBER',
  FOR_TRANSFER = 'FOR_TRANSFER',
}

export default {
  ATTRIBUTE,
  RELATION,
  GENERATED_FOR,
};
