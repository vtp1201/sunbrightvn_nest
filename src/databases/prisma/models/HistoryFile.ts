import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/HistoryFile';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { file, historyLogCDC } from '.';

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

  // defined Relations
  const fileRelation = oneToOne({
    attribute: ATTRIBUTE.fileId,
    model: file,
    relation: RELATION.file,
  });
  const historyLogCDCRelation = oneToOne({
    attribute: ATTRIBUTE.historyLogCDCId,
    model: historyLogCDC,
    relation: RELATION.historyLogCDC,
  });

  // defined Model
  process.nextTick(() => {
    HistoryFileModel.int(ATTRIBUTE.fileId, {
      map: COLUMN.fileId,
    })
      .int(ATTRIBUTE.historyLogCDCId, {
        map: COLUMN.historyLogCDCId,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(fileRelation)
      .mixin(historyLogCDCRelation)

      // ids
      .id({
        fields: [ATTRIBUTE.fileId, ATTRIBUTE.historyLogCDCId],
      })

      // table name
      .map(TABLE_NAME.HISTORY_FILE);
  });
});
