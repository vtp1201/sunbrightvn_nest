import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyHasBusinessActivity';

export default createModel(
  MODEL_NAME.COMPANY_HAS_BUSINESS_ACTIVITY,
  (CompanyHasBusinessActivityModel) => {
    // relations
    const companyHasBusinessActivity = manyToMany({
      attributeA: ATTRIBUTE.companyId,
      attributeB: ATTRIBUTE.businessActivityId,
      modelNameA: MODEL_NAME.COMPANY,
      modelNameB: MODEL_NAME.BUSINESS_ACTIVITY,
    });
    process.nextTick(() => {
      CompanyHasBusinessActivityModel.int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
      })
        .int(ATTRIBUTE.businessActivityId, {
          map: COLUMN.businessActivityId,
        })
        .mixin(companyHasBusinessActivity);
    });
  },
);
