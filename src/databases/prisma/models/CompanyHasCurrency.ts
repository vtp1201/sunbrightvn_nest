import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyHasCurrency';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.COMPANY_HAS_CURRENCY,
  (CompanyHasCurrencyModel) => {
    // relations
    const companyHasCurrency = manyToMany({
      attributeA: ATTRIBUTE.companyId,
      attributeB: ATTRIBUTE.currencyId,
      modelNameA: MODEL_NAME.COMPANY,
      modelNameB: MODEL_NAME.CURRENCY,
    });
    process.nextTick(() => {
      CompanyHasCurrencyModel.int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
      })
        .int(ATTRIBUTE.currencyId, {
          map: COLUMN.currencyId,
        })
        .mixin(companyHasCurrency);
    });
  },
);
