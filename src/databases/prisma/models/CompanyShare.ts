import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_DATE_TIME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyShare';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.COMPANY_SHARE, (CompanyShareModel) => {
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
    CompanyShareModel.int(ATTRIBUTE.id, {
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
      .bigInt(ATTRIBUTE.startNumber, {
        map: COLUMN.startNumber,
        optional: true,
      })
      .bigInt(ATTRIBUTE.endNumber, {
        map: COLUMN.endNumber,
        optional: true,
      })
      .bigInt(ATTRIBUTE.value, {
        map: COLUMN.value,
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
      .map(TABLE_NAME.COMPANY_SHARE);
  });
});
