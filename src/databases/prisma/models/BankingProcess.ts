import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/BankingProcess';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.BANKING_PROCESS,
  (BankingProcessModel) => {
    BankingProcessModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
        optional: true,
      })
      .int(ATTRIBUTE.bankId, {
        map: COLUMN.bankId,
        optional: true,
      })
      .int(ATTRIBUTE.status, {
        map: COLUMN.status,
        optional: true,
        default: 0,
      })
      .bigInt(ATTRIBUTE.clientTime, {
        map: COLUMN.clientTime,
        optional: true,
      })
      .string(ATTRIBUTE.content, {
        map: COLUMN.content,
        raw: RAW_STRING.LENGTH_200,
      })
      .int(ATTRIBUTE.bankBranchId, {
        map: COLUMN.bankBranchId,
        optional: true,
      })
      .string(ATTRIBUTE.contactPerson, {
        map: COLUMN.contactPerson,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.titleJob, {
        map: COLUMN.titleJob,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.phone, {
        map: COLUMN.phone,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.applicationSetTrackingCode, {
        map: COLUMN.applicationSetTrackingCode,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.applicationFormTrackingCode, {
        map: COLUMN.applicationFormTrackingCode,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.urlVideo, {
        map: COLUMN.urlVideo,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .int(ATTRIBUTE.phoneCountryId, {
        map: COLUMN.phoneCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.bankAddress, {
        map: COLUMN.bankAddress,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.contactPerson, {
        map: COLUMN.contactPerson,
        raw: RAW_STRING.TEXT,
        optional: true,
      })

      // dateTime marks
      .mixin(createdTime)
      .mixin(updatedTime)
      .mixin(deleted)

      // table name
      .map(TABLE_NAME.BANKING_PROCESS);
  },
);
