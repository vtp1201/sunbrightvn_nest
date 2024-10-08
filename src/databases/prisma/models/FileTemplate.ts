import { createModel } from 'schemix';

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
  questionGroup,
  rankingPartnerType,
  serviceChangeOfficer,
  serviceHasFileTemplate,
  token,
} from '.';
import { deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/FileTemplate';

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
    attribute: ATTRIBUTE.fileTemplateTypeId,
    model: fileTemplateType,
    relation: RELATION.fileTemplateType,
    map: INDEX_NAME.fileTemplateTypeId,
    option: { optional: true },
  });
  const collectSameFileTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.collectSameId,
    model: fileTemplate,
    relation: RELATION.collectSameFileTemplate,
    map: INDEX_NAME.collectSameId,
    isNeedName: true,
    option: { optional: true },
  });
  const collectSameFileTemplatesRelation = oneToMany({
    model: fileTemplate,
    relation: RELATION.collectSameFileTemplates,
    fromRelation: RELATION.collectSameFileTemplate,
  });
  const parentRelation = oneToOne({
    attribute: ATTRIBUTE.parentId,
    model: fileTemplate,
    relation: RELATION.parent,
    map: INDEX_NAME.parentId,
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
  const questionGroupsRelation = oneToMany({
    model: questionGroup,
    relation: RELATION.questionGroups,
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
      .mixin(questionGroupsRelation)
      .mixin(tokensRelation)

      // indexes
      .raw(INDEX.collectSameId)
      .raw(INDEX.parentId)
      .raw(INDEX.fileTemplateTypeId)

      // table name
      .map(TABLE_NAME.FILE_TEMPLATE);
  });
});
