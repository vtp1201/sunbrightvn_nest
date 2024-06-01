import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyHasBusinessActivity';

export default createModel(
  MODEL_NAME.COMPANY_HAS_BUSINESS_ACTIVITY,
  (CompanyHasBusinessActivityModel) => {
    CompanyHasBusinessActivityModel.int(ATTRIBUTE.companyId, {
      map: COLUMN.companyId,
    })
      .int(ATTRIBUTE.businessActivityId, {
        map: COLUMN.businessActivityId,
      })
      .id({
        fields: [ATTRIBUTE.companyId, ATTRIBUTE.businessActivityId],
      })

      // table name
      .map(TABLE_NAME.COMPANY_HAS_BUSINESS_ACTIVITY);
  },
);
