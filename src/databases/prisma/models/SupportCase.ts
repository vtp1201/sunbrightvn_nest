import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/SupportCase';
import { createdTime, deleted } from '../mixins';

export default createModel(MODEL_NAME.SUPPORT_CASE, (SupportCaseModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
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
    SupportCaseModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.subject, {
        map: COLUMN.subject,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
        optional: true,
      })
      .int(ATTRIBUTE.supportCaseTypeId, {
        map: COLUMN.supportCaseTypeId,
      })
      .int(ATTRIBUTE.supportCaseStatusId, {
        map: COLUMN.supportCaseStatusId,
      })
      .int(ATTRIBUTE.supportCasePriorityId, {
        map: COLUMN.supportCasePriorityId,
      })
      .int(ATTRIBUTE.point, {
        map: COLUMN.point,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.supportCasePriorityId)
      // .raw(INDEX.supportCaseStatusId)
      // .raw(INDEX.supportCaseTypeId)
      // .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.SUPPORT_CASE);
  });
});
