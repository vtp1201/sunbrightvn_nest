import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  RELATION,
} from '../utils/enums/FileTemplate';
import { deleted, oneToMany, oneToOne } from '../mixins';
import {
  bank,
  countryHasEntityType,
  file,
  fileTemplate,
  fileTemplateHasCompanyMemberType,
  fileTemplateHasNationality,
  fileTemplateType,
  processLog,
  processStepHasFileTemplate,
  rankingPartnerType,
  serviceChangeOfficer,
  serviceHasFileTemplate,
  token,
} from '.';

export default createModel(MODEL_NAME.FILE_TEMPLATE, (FileTemplateModel) => {
  const initDeleted = deleted(
    {
      attribute: ATTRIBUTE.deletedTime,
      column: COLUMN.deletedTime,
    },
    {
      attribute: ATTRIBUTE.isDeleted,
      column: COLUMN.isDeleted,
    },
  );

  // defined Relations
  const banksRelation = oneToMany({
    model: bank,
    relation: RELATION.banks,
  });
  const countryHasEntityTypesRelation = oneToMany({
    model: countryHasEntityType,
    relation: RELATION.countryHasEntityTypes,
  });
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  const fileTemplateTypeRelation = oneToOne({
    attribute: ATTRIBUTE.collectSameId,
    model: fileTemplateType,
    relation: RELATION.fileTemplateType,
    option: { optional: true },
  });
  const collectSameFileTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.collectSameId,
    model: fileTemplate,
    relation: RELATION.collectSameFileTemplate,
    isNeedName: true,
    option: { optional: true },
  });
  const collectSameFileTemplatesRelation = oneToMany({
    model: fileTemplate,
    relation: RELATION.collectSameFileTemplates,
    fromRelation: RELATION.collectSameFileTemplate,
  });
  const parentRelation = oneToOne({
    attribute: ATTRIBUTE.collectSameId,
    model: fileTemplate,
    relation: RELATION.parent,
    isNeedName: true,
    option: { optional: true },
  });
  const childrenRelation = oneToMany({
    model: fileTemplate,
    relation: RELATION.children,
    fromRelation: RELATION.parent,
  });
  const fileTemplateHasCompanyMemberTypesRelation = oneToMany({
    model: fileTemplateHasCompanyMemberType,
    relation: RELATION.fileTemplateHasCompanyMemberTypes,
  });
  const fileTemplateHasNationalitiesRelation = oneToMany({
    model: fileTemplateHasNationality,
    relation: RELATION.fileTemplateHasNationalities,
  });
  const rankingPartnerTypesRelation = oneToMany({
    model: rankingPartnerType,
    relation: RELATION.rankingPartnerTypes,
  });
  const processLogsRelation = oneToMany({
    model: processLog,
    relation: RELATION.processLogs,
  });
  const processStepHasFileTemplatesRelation = oneToMany({
    model: processStepHasFileTemplate,
    relation: RELATION.processStepHasFileTemplates,
  });
  const serviceChangeOfficersRelation = oneToMany({
    model: serviceChangeOfficer,
    relation: RELATION.serviceChangeOfficers,
  });
  const serviceHasFileTemplatesRelation = oneToMany({
    model: serviceHasFileTemplate,
    relation: RELATION.serviceHasFileTemplates,
  });
  const tokensRelation = oneToMany({
    model: token,
    relation: RELATION.tokens,
  });

  // defined Model
  process.nextTick(() => {
    FileTemplateModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.pathTemplate, {
        map: COLUMN.pathTemplate,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .boolean(ATTRIBUTE.isNotSigned, {
        map: COLUMN.isNotSigned,
        default: false,
      })
      .boolean(ATTRIBUTE.isESign, {
        map: COLUMN.isESign,
        default: false,
      })
      .boolean(ATTRIBUTE.isSignedForFatca, {
        map: COLUMN.isSignedForFatca,
        default: false,
      })
      .boolean(ATTRIBUTE.isApprovedDateAppointment, {
        map: COLUMN.isApprovedDateAppointment,
        default: false,
      })
      .boolean(ATTRIBUTE.isInactive, {
        map: COLUMN.isInactive,
        default: false,
      })
      .int(ATTRIBUTE.collectSameId, {
        map: COLUMN.collectSameId,
        optional: true,
      })
      .int(ATTRIBUTE.parentId, {
        map: COLUMN.parentId,
        optional: true,
      })
      .int(ATTRIBUTE.fileTemplateTypeId, {
        map: COLUMN.fileTemplateTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.fileTypeId, {
        map: COLUMN.fileTypeId,
        optional: true,
      })
      .json(ATTRIBUTE.dataConfig, {
        map: COLUMN.dataConfig,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(banksRelation)
      .mixin(countryHasEntityTypesRelation)
      .mixin(filesRelation)
      .mixin(collectSameFileTemplateRelation)
      .mixin(collectSameFileTemplatesRelation)
      .mixin(parentRelation)
      .mixin(childrenRelation)
      .mixin(fileTemplateHasCompanyMemberTypesRelation)
      .mixin(fileTemplateHasNationalitiesRelation)
      .mixin(fileTemplateTypeRelation)
      .mixin(rankingPartnerTypesRelation)
      .mixin(processLogsRelation)
      .mixin(processStepHasFileTemplatesRelation)
      .mixin(serviceChangeOfficersRelation)
      .mixin(serviceHasFileTemplatesRelation)
      .mixin(tokensRelation)

      // indexes
      // .raw(INDEX.collectSameId)
      // .raw(INDEX.parentId)

      // table name
      .map(TABLE_NAME.FILE_TEMPLATE);
  });
});
