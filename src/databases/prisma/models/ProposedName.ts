import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/ProposedName';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.PROPOSED_NAME, (ProposedNameModel) => {
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
    ProposedNameModel.int(ATTRIBUTE.id, {
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
      .int(ATTRIBUTE.companySuffixId, {
        map: COLUMN.companySuffixId,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
        optional: true,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isApprove, {
        map: COLUMN.isApprove,
        default: false,
      })
      .boolean(ATTRIBUTE.isSentAgent, {
        map: COLUMN.isSentAgent,
        default: false,
      })
      .boolean(ATTRIBUTE.isSentCustomer, {
        map: COLUMN.isSentCustomer,
        default: false,
      })
      .boolean(ATTRIBUTE.isConfirmed, {
        map: COLUMN.isConfirmed,
        default: false,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.companyId)
      .raw(INDEX.companySuffixId)
      .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.PROPOSED_NAME);
  });
});
