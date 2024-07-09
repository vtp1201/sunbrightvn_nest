import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyHasOperationCountry';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.COMPANY_HAS_OPERATION_COUNTRY,
  (CompanyHasOperationCountryModel) => {
    // relations
    const companyHasOperationCountry = manyToMany({
      attributeA: ATTRIBUTE.companyId,
      attributeB: ATTRIBUTE.countryId,
      modelNameA: MODEL_NAME.COMPANY,
      modelNameB: MODEL_NAME.COUNTRY,
    });
    process.nextTick(() => {
      CompanyHasOperationCountryModel.int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
      })
        .int(ATTRIBUTE.countryId, {
          map: COLUMN.countryId,
        })
        .mixin(companyHasOperationCountry);
    });
  },
);
