import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING, RAW_DATE_TIME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyEvent';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.COMPANY_EVENT, (CompanyEventModel) => {
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
    CompanyEventModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
      })
      .int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
        optional: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .dateTime(ATTRIBUTE.dateCompleted, {
        map: COLUMN.dateCompleted,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .dateTime(ATTRIBUTE.dueDate, {
        map: COLUMN.dueDate,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .dateTime(ATTRIBUTE.dateRemind, {
        map: COLUMN.dateRemind,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .boolean(ATTRIBUTE.isNotShow, {
        map: COLUMN.isNotShow,
        default: false,
      })
      .int(ATTRIBUTE.companyEventTypeId, {
        map: COLUMN.companyEventTypeId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isNotifyDueRenewal, {
        map: COLUMN.isNotifyDueRenewal,
        default: false,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.COMPANY_EVENT);
  });
});
