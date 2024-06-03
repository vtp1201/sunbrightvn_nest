import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
} from '../utils/enums/CompanyMemberHasOperationCountry';

export default createModel(
  MODEL_NAME.COMPANY_MEMBER_HAS_OPERATION_COUNTRIES,
  (CompanyMemberHasOperationCountryModel) => {
    CompanyMemberHasOperationCountryModel.int(ATTRIBUTE.companyMemberId, {
      map: COLUMN.companyMemberId,
    })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
      .id({
        fields: [ATTRIBUTE.companyMemberId, ATTRIBUTE.countryId],
      })

      // table name
      .map(TABLE_NAME.COMPANY_MEMBER_HAS_OPERATION_COUNTRIES);
  },
);
