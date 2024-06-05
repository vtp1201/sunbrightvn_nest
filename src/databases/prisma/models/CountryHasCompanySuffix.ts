import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CountryHasCompanySuffix';

export default createModel(
  MODEL_NAME.COUNTRY_HAS_COMPANY_SUFFIX,
  (CountryHasCompanySuffixModel) => {
    CountryHasCompanySuffixModel.int(ATTRIBUTE.countryId, {
      map: COLUMN.countryId,
    })
      .int(ATTRIBUTE.companySuffixId, {
        map: COLUMN.companySuffixId,
      })
      .id({
        fields: [ATTRIBUTE.countryId, ATTRIBUTE.companySuffixId],
      })

      // table name
      .map(TABLE_NAME.COUNTRY_HAS_COMPANY_SUFFIX);
  },
);
