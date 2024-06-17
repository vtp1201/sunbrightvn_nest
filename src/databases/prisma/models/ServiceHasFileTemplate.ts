import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ServiceHasFileTemplate';

export default createModel(
  MODEL_NAME.SERVICE_HAS_FILE_TEMPLATE,
  (ServiceHasFileTemplateModel) => {
    // defined Model
    process.nextTick(() => {
      ServiceHasFileTemplateModel.int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
        .int(ATTRIBUTE.fileTemplateId, {
          map: COLUMN.fileTemplateId,
        })

        // ids
        .id({
          fields: [ATTRIBUTE.serviceId, ATTRIBUTE.fileTemplateId],
        })

        // table name
        .map(TABLE_NAME.SERVICE_HAS_FILE_TEMPLATE);
    });
  },
);
