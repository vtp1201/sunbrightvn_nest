import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyHasOperationCountry';

export default createModel(
  MODEL_NAME.COMPANY_HAS_OPERATION_COUNTRY,
  (CompanyHasOperationCountryModel) => {
    CompanyHasOperationCountryModel.int(ATTRIBUTE.companyId, {
      map: COLUMN.companyId,
    })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
      .id({
        fields: [ATTRIBUTE.companyId, ATTRIBUTE.countryId],
      })

      // table name
      .map(TABLE_NAME.COMPANY_HAS_OPERATION_COUNTRY);
  },
);
