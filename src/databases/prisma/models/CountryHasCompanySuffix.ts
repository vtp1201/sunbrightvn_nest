import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CountryHasCompanySuffix';

export default createModel(
  MODEL_NAME.COUNTRY_HAS_COMPANY_SUFFIX,
  (CountryHasCompanySuffixModel) => {
    // relations
    const countryHasCompanySuffix = manyToMany({
      attributeA: ATTRIBUTE.countryId,
      attributeB: ATTRIBUTE.companySuffixId,
      modelNameA: MODEL_NAME.COUNTRY,
      modelNameB: MODEL_NAME.COMPANY_SUFFIX,
    });
    process.nextTick(() => {
      CountryHasCompanySuffixModel.int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
        .int(ATTRIBUTE.companySuffixId, {
          map: COLUMN.companySuffixId,
        })
        .mixin(countryHasCompanySuffix);
    });
  },
);
