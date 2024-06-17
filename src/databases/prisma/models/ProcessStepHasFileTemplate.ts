import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ProcessStepHasFileTemplate';

export default createModel(
  MODEL_NAME.PROCESS_STEP_HAS_FILE_TEMPLATE,
  (ProcessStepHasFileTemplateModel) => {
    // defined Model
    process.nextTick(() => {
      ProcessStepHasFileTemplateModel.int(ATTRIBUTE.processStepId, {
        map: COLUMN.processStepId,
      })
        .int(ATTRIBUTE.fileTemplateId, {
          map: COLUMN.fileTemplateId,
        })
        .int(ATTRIBUTE.order, {
          map: COLUMN.order,
          optional: true,
        })
        .boolean(ATTRIBUTE.isBegin, {
          map: COLUMN.isBegin,
          default: false,
        })

        // ids
        .id({
          fields: [ATTRIBUTE.fileTemplateId, ATTRIBUTE.processStepId],
        })

        // table name
        .map(TABLE_NAME.PROCESS_STEP_HAS_FILE_TEMPLATE);
    });
  },
);
