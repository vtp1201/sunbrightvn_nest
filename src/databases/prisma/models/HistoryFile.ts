import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/HistoryFile';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.HISTORY_FILE, (HistoryFileModel) => {
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
    HistoryFileModel.int(ATTRIBUTE.fileId, {
      map: COLUMN.fileId,
    })
      .int(ATTRIBUTE.historyLogCdcId, {
        map: COLUMN.historyLogCdcId,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // ids
      .id({
        fields: [ATTRIBUTE.fileId, ATTRIBUTE.historyLogCdcId],
      })

      // table name
      .map(TABLE_NAME.HISTORY_FILE);
  });
});
