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
  bankHasFileTemplates = RELATION_DEFAULT.bankHasFileTemplates,
  countryHasEntityTypeHasFileTemplates = RELATION_DEFAULT.countryHasEntityTypeHasFileTemplates,
  files = RELATION_DEFAULT.files,
  // fileTemplateCollectSameIdToFileTemplate = RELATION_DEFAULT.fileTemplateCollectSameIdToFileTemplate,
  // otherFileTemplateCollectSameIdToFileTemplate = RELATION_DEFAULT.otherFileTemplateCollectSameIdToFileTemplate,
  // fileTemplateParentIdToFileTemplate = RELATION_DEFAULT.fileTemplateParentIdToFileTemplate,
  // otherFileTemplateParentIdToFileTemplate = RELATION_DEFAULT.otherFileTemplateParentIdToFileTemplate,
  // fileTemplateHasCompanyMemberType = RELATION_DEFAULT.fileTemplateHasCompanyMemberType,
  // fileTemplateHasNationality = RELATION_DEFAULT.fileTemplateHasNationality,
  // fileTemplateHasRankingPartnerType = RELATION_DEFAULT.fileTemplateHasRankingPartnerType,
  // processLog = RELATION_DEFAULT.processLog,
  // processStepHasFileTemplates = RELATION_DEFAULT.processStepHasFileTemplates,
  // serviceChangeOfficerHasFileTemplate = RELATION_DEFAULT.serviceChangeOfficerHasFileTemplate,
  // serviceHasFileTemplate = RELATION_DEFAULT.serviceHasFileTemplate,
  // token = RELATION_DEFAULT.token,
}

export enum INDEX {
  parentId = `@@index([${ATTRIBUTE.parentId}], map: "FK_file_template_parent_id_idx")`,
  collectSameId = `@@index([${ATTRIBUTE.collectSameId}], map: "fk_collect_same_id_INDEX")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
