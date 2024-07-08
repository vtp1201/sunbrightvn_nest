import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ProcessHasNote';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.PROCESS_HAS_NOTE,
  (ProcessHasNoteModel) => {
    // relations
    const processHasNote = manyToMany({
      attributeA: ATTRIBUTE.processId,
      attributeB: ATTRIBUTE.noteId,
      modelNameA: MODEL_NAME.PROCESS,
      modelNameB: MODEL_NAME.NOTE,
    });

    // defined Model
    process.nextTick(() => {
      ProcessHasNoteModel.int(ATTRIBUTE.processId, {
        map: COLUMN.processId,
      })
        .int(ATTRIBUTE.noteId, {
          map: COLUMN.noteId,
        })

        .mixin(processHasNote);
    });
  },
);
