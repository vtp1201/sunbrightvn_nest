import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ServiceChangeOfficerHasFileTemplate';

export default createModel(
  MODEL_NAME.SERVICE_CHANGE_OFFICER_HAS_FILE_TEMPLATE,
  (ServiceChangeOfficerHasFileTemplateModel) => {
    // relations
    const serviceChangeOfficerHasFileTemplate = manyToMany({
      attributeA: ATTRIBUTE.serviceChangeOfficerId,
      attributeB: ATTRIBUTE.fileTemplateId,
      modelNameA: MODEL_NAME.SERVICE_CHANGE_OFFICER,
      modelNameB: MODEL_NAME.FILE_TEMPLATE,
    });

    // defined Model
    process.nextTick(() => {
      ServiceChangeOfficerHasFileTemplateModel.int(ATTRIBUTE.serviceChangeOfficerId, {
        map: COLUMN.serviceChangeOfficerId,
      })
        .int(ATTRIBUTE.fileTemplateId, {
          map: COLUMN.fileTemplateId,
        })

        .mixin(serviceChangeOfficerHasFileTemplate);
    });
  },
);
