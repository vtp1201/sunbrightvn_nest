import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  description = 'description',
  pathTemplate = 'pathTemplate',
  isNotSigned = 'isNotSigned',
  isESign = 'isESign',
  isSignedForFatca = 'isSignedForFatca',
  parentId = 'parentId',
  fileTemplateTypeId = 'fileTemplateTypeId',
  fileTypeId = 'fileTypeId',
  dataConfig = 'dataConfig',
  collectSameId = 'collectSameId',
  isInactive = 'isInactive',
  isApprovedDateAppointment = 'isApprovedDateAppointment',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  description = 'description',
  pathTemplate = 'path_template',
  isNotSigned = 'is_not_signed',
  isESign = 'is_esign',
  isSignedForFatca = 'is_signed_for_FATCA',
  parentId = 'parent_id',
  fileTemplateTypeId = 'file_template_type_id',
  fileTypeId = 'file_type_id',
  dataConfig = 'data_config',
  collectSameId = 'collect_same_id',
  isInactive = 'is_inactive',
  isApprovedDateAppointment = 'is_approved_date_appointment',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  banks = RELATION_DEFAULT.banks,
  countryHasEntityTypes = RELATION_DEFAULT.countryHasEntityTypes,
  files = RELATION_DEFAULT.files,
  fileTemplateType = RELATION_DEFAULT.fileTemplateType,
  collectSameFileTemplate = RELATION_DEFAULT.collectSameFileTemplate,
  collectSameFileTemplates = RELATION_DEFAULT.collectSameFileTemplates,
  parent = RELATION_DEFAULT.parent,
  children = RELATION_DEFAULT.children,
  fileTemplateHasCompanyMemberTypes = RELATION_DEFAULT.fileTemplateHasCompanyMemberTypes,
  fileTemplateHasNationalities = RELATION_DEFAULT.fileTemplateHasNationalities,
  rankingPartnerTypes = RELATION_DEFAULT.rankingPartnerTypes,
  processLogs = RELATION_DEFAULT.processLogs,
  processStepHasFileTemplates = RELATION_DEFAULT.processStepHasFileTemplates,
  serviceChangeOfficers = RELATION_DEFAULT.serviceChangeOfficers,
  serviceHasFileTemplates = RELATION_DEFAULT.serviceHasFileTemplates,
  questionGroups = RELATION_DEFAULT.questionGroups,
  tokens = RELATION_DEFAULT.tokens,
}

const tableName = TABLE_NAME.FILE_TEMPLATE;
export enum INDEX_NAME {
  parentId = `"${tableName}_${COLUMN.parentId}_fkey"`,
  collectSameId = `"${tableName}_${COLUMN.collectSameId}_fkey"`,
  fileTemplateTypeId = `"${tableName}_${COLUMN.fileTemplateTypeId}_fkey"`,
}

export enum INDEX {
  parentId = `@@index([${ATTRIBUTE.parentId}], map: ${INDEX_NAME.parentId})`,
  collectSameId = `@@index([${ATTRIBUTE.collectSameId}], map: ${INDEX_NAME.collectSameId})`,
  fileTemplateTypeId = `@@index([${ATTRIBUTE.fileTemplateTypeId}], map: ${INDEX_NAME.fileTemplateTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
