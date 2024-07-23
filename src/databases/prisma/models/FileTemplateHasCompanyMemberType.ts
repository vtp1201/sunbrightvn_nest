import { createModel } from 'schemix';

import { companyMemberType, fileTemplate, typeMember } from '.';
import { generatedForEnum } from '../enums';
import { deleted, oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  INDEX_NAME,
  RELATION,
} from '../utils/enums/FileTemplateHasCompanyMemberType';

export default createModel(
  MODEL_NAME.FILE_TEMPLATE_HAS_COMPANY_MEMBER_TYPE,
  (FileTemplateHasCompanyMemberTypeModel) => {
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
    const companyMemberTypeRelation = oneToOne({
      attribute: ATTRIBUTE.companyMemberTypeId,
      model: companyMemberType,
      relation: RELATION.companyMemberType,
      map: INDEX_NAME.companyMemberTypeId,
    });
    const fileTemplateRelation = oneToOne({
      attribute: ATTRIBUTE.fileTemplateId,
      model: fileTemplate,
      relation: RELATION.fileTemplate,
      map: INDEX_NAME.fileTemplateId,
    });
    const typeMemberRelation = oneToOne({
      attribute: ATTRIBUTE.typeMemberId,
      model: typeMember,
      relation: RELATION.typeMember,
      map: INDEX_NAME.typeMemberId,
      option: { optional: true },
    });

    // defined Model
    process.nextTick(() => {
      FileTemplateHasCompanyMemberTypeModel.int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
      })
        .int(ATTRIBUTE.companyMemberTypeId, {
          map: COLUMN.companyMemberTypeId,
        })
        .int(ATTRIBUTE.typeMemberId, {
          map: COLUMN.typeMemberId,
          optional: true,
        })
        .boolean(ATTRIBUTE.isSignedByAll, {
          map: COLUMN.isSignedByAll,
          default: false,
        })
        .boolean(ATTRIBUTE.isSignedByAppointed, {
          map: COLUMN.isSignedByAppointed,
          default: false,
        })
        .boolean(ATTRIBUTE.isSignedByIndividual, {
          map: COLUMN.isSignedByIndividual,
          default: false,
        })
        .boolean(ATTRIBUTE.isSignedTransfer, {
          map: COLUMN.isSignedTransfer,
          default: false,
        })
        .boolean(ATTRIBUTE.isSignedByOldestMember, {
          map: COLUMN.isSignedByOldestMember,
          default: false,
        })
        .enum(ATTRIBUTE.generatedFor, generatedForEnum, {
          map: COLUMN.generatedFor,
        })

        // ids
        .id({
          fields: [ATTRIBUTE.fileTemplateId, ATTRIBUTE.companyMemberTypeId, ATTRIBUTE.generatedFor],
        })

        // dateTime marks
        .mixin(initDeleted)

        // relations
        .mixin(companyMemberTypeRelation)
        .mixin(fileTemplateRelation)
        .mixin(typeMemberRelation)

        // indexes
        .raw(INDEX.typeMemberId)
        .raw(INDEX.fileTemplateId)
        .raw(INDEX.companyMemberTypeId)

        // table name
        .map(TABLE_NAME.FILE_TEMPLATE_HAS_COMPANY_MEMBER_TYPE);
    });
  },
);
