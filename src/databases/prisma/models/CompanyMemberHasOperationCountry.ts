import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyMemberHasOperationCountry';

export default createModel(
  MODEL_NAME.COMPANY_MEMBER_HAS_OPERATION_COUNTRIES,
  (CompanyMemberHasOperationCountryModel) => {
    // relations
    const companyMemberOperationCountries = manyToMany({
      attributeA: ATTRIBUTE.companyMemberId,
      attributeB: ATTRIBUTE.countryId,
      modelNameA: MODEL_NAME.COMPANY_MEMBER,
      modelNameB: MODEL_NAME.COUNTRY,
    });
    process.nextTick(() => {
      CompanyMemberHasOperationCountryModel.int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
      })
        .int(ATTRIBUTE.countryId, {
          map: COLUMN.countryId,
        })
        .mixin(companyMemberOperationCountries);
    });
  },
);
