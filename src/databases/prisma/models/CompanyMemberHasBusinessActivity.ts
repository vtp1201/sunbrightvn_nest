import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
} from '../utils/enums/CompanyMemberHasBusinessActivity';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.COMPANY_MEMBER_HAS_BUSINESS_ACTIVITY,
  (CompanyMemberHasBusinessActivityModel) => {
    // relations
    const companyMemberHasBusinessActivity = manyToMany({
      attributeA: ATTRIBUTE.companyMemberId,
      attributeB: ATTRIBUTE.businessActivityId,
      modelNameA: MODEL_NAME.COMPANY_MEMBER,
      modelNameB: MODEL_NAME.BUSINESS_ACTIVITY,
    });
    process.nextTick(() => {
      CompanyMemberHasBusinessActivityModel.int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
      })
        .int(ATTRIBUTE.businessActivityId, {
          map: COLUMN.businessActivityId,
        })
        .mixin(companyMemberHasBusinessActivity);
    });
  },
);
