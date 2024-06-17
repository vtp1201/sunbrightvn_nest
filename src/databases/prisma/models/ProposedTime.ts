import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/ProposedTime';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.PROPOSED_TIME, (ProposedTimeModel) => {
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
    ProposedTimeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.bankingProcessId, {
        map: COLUMN.bankingProcessId,
      })
      .int(ATTRIBUTE.fromTime, {
        map: COLUMN.fromTime,
      })
      .int(ATTRIBUTE.toTime, {
        map: COLUMN.toTime,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.bankingProcessId)

      // table name
      .map(TABLE_NAME.PROPOSED_TIME);
  });
});
