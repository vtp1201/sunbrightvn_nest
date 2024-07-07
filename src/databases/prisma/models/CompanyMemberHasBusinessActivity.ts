import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
} from '../utils/enums/CompanyMemberHasBusinessActivity';

export default createModel(
  MODEL_NAME.COMPANY_MEMBER_HAS_BUSINESS_ACTIVITY,
  (CompanyMemberHasBusinessActivityModel) => {
    CompanyMemberHasBusinessActivityModel.int(ATTRIBUTE.companyMemberId, {
      map: COLUMN.companyMemberId,
    })
      .int(ATTRIBUTE.businessActivityId, {
        map: COLUMN.businessActivityId,
      })
      .id({
        fields: [ATTRIBUTE.companyMemberId, ATTRIBUTE.businessActivityId],
      })

      // table name
      .map(TABLE_NAME.COMPANY_MEMBER_HAS_BUSINESS_ACTIVITY);
  },
);
