import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyHasCurrency';

export default createModel(
  MODEL_NAME.COMPANY_HAS_CURRENCY,
  (CompanyHasCurrencyModel) => {
    CompanyHasCurrencyModel.int(ATTRIBUTE.companyId, {
      map: COLUMN.companyId,
    })
      .int(ATTRIBUTE.currencyId, {
        map: COLUMN.currencyId,
      })
      .id({
        fields: [ATTRIBUTE.companyId, ATTRIBUTE.currencyId],
      })

      // table name
      .map(TABLE_NAME.COMPANY_HAS_CURRENCY);
  },
);
