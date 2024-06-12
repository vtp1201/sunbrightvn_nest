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

export enum INDEX {
  typeMemberId = `@@index([${ATTRIBUTE.typeMemberId}], map: "fk_fcm_type_member_id_idx")`,
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
