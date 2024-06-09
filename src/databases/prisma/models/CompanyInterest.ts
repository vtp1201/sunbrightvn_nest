import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_DATE_TIME, RAW_NUMBER } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyInterest';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.COMPANY_INTEREST,
  (CompanyInterestModel) => {
    const initCreatedTime = createdTime({
      attribute: ATTRIBUTE.createdTime,
      column: COLUMN.createdTime,
    });
    const initUpdatedTime = updatedTime({
      attribute: ATTRIBUTE.updatedTime,
      column: COLUMN.updatedTime,
    });
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
      CompanyInterestModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.taskId, {
          map: COLUMN.taskId,
        })
        .int(ATTRIBUTE.no, {
          map: COLUMN.no,
          optional: true,
        })
        .int(ATTRIBUTE.companyId, {
          map: COLUMN.companyId,
        })
        .int(ATTRIBUTE.companyMemberId, {
          map: COLUMN.companyMemberId,
        })
        .int(ATTRIBUTE.companyPositionId, {
          map: COLUMN.companyPositionId,
          optional: true,
        })
        .int(ATTRIBUTE.corporationCompanyMemberId, {
          map: COLUMN.corporationCompanyMemberId,
          optional: true,
        })
        .int(ATTRIBUTE.startNumber, {
          map: COLUMN.startNumber,
          optional: true,
        })
        .int(ATTRIBUTE.endNumber, {
          map: COLUMN.endNumber,
          optional: true,
        })
        .float(ATTRIBUTE.value, {
          map: COLUMN.value,
          raw: RAW_NUMBER.FLOAT,
        })
        .boolean(ATTRIBUTE.isValid, {
          map: COLUMN.isValid,
          default: false,
        })
        .boolean(ATTRIBUTE.isApproved, {
          map: COLUMN.isApproved,
          default: false,
        })
        .int(ATTRIBUTE.issuedFileId, {
          map: COLUMN.issuedFileId,
          optional: true,
        })
        .dateTime(ATTRIBUTE.issuedDated, {
          map: COLUMN.issuedDated,
          raw: RAW_DATE_TIME.DATE_ONLY,
          optional: true,
        })
        .dateTime(ATTRIBUTE.expiredDated, {
          map: COLUMN.expiredDated,
          raw: RAW_DATE_TIME.DATE_ONLY,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // table name
        .map(TABLE_NAME.COMPANY_INTEREST);
    });
  },
);
