import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
} from '../utils/enums/FileTemplateHasCompanyMemberType';
import { deleted } from '../mixins';
import { generatedForEnum } from '../enums';

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
          fields: [
            ATTRIBUTE.fileTemplateId,
            ATTRIBUTE.companyMemberTypeId,
            ATTRIBUTE.generatedFor,
          ],
        })

        // dateTime marks
        .mixin(initDeleted)

        // indexes
        .raw(INDEX.typeMemberId)

        // table name
        .map(TABLE_NAME.FILE_TEMPLATE_HAS_COMPANY_MEMBER_TYPE);
    });
  },
);
