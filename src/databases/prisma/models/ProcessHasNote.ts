import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ProcessHasNote';
import { deleted } from '../mixins';

export default createModel(
  MODEL_NAME.PROCESS_HAS_NOTE,
  (ProcessHasNoteModel) => {
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
      ProcessHasNoteModel.int(ATTRIBUTE.processId, {
        map: COLUMN.processId,
      })
        .int(ATTRIBUTE.noteId, {
          map: COLUMN.noteId,
        })

        // dateTime marks
        .mixin(initDeleted)

        // ids
        .id({ fields: [ATTRIBUTE.noteId, ATTRIBUTE.processId] })

        // table name
        .map(TABLE_NAME.PROCESS_HAS_NOTE);
    });
  },
);
