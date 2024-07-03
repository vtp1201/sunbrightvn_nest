import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  RELATION,
} from '../utils/enums/ProcessStepHasFileTemplate';
import { oneToOne } from '../mixins';
import { fileTemplate, processStep } from '.';

export default createModel(
  MODEL_NAME.PROCESS_STEP_HAS_FILE_TEMPLATE,
  (ProcessStepHasFileTemplateModel) => {
    // defined Relations
    const processStepRelation = oneToOne({
      attribute: ATTRIBUTE.processStepId,
      model: processStep,
      relation: RELATION.processStep,
    });
    const fileTemplateRelation = oneToOne({
      attribute: ATTRIBUTE.fileTemplateId,
      model: fileTemplate,
      relation: RELATION.fileTemplate,
    });

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

        // relations
        .mixin(processStepRelation)
        .mixin(fileTemplateRelation)

        // ids
        .id({
          fields: [ATTRIBUTE.fileTemplateId, ATTRIBUTE.processStepId],
        })

        // table name
        .map(TABLE_NAME.PROCESS_STEP_HAS_FILE_TEMPLATE);
    });
  },
);
