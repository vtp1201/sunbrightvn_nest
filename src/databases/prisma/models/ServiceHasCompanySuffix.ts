import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ServiceHasCompanySuffix';

export default createModel(
  MODEL_NAME.SERVICE_HAS_COMPANY_SUFFIX,
  (ServiceHasCompanySuffixModel) => {
    // defined Model
    process.nextTick(() => {
      ServiceHasCompanySuffixModel.int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
        .int(ATTRIBUTE.companySuffixId, {
          map: COLUMN.companySuffixId,
        })

        // ids
        .id({
          fields: [ATTRIBUTE.serviceId, ATTRIBUTE.companySuffixId],
        })

        // table name
        .map(TABLE_NAME.SERVICE_HAS_COMPANY_SUFFIX);
    });
  },
);
