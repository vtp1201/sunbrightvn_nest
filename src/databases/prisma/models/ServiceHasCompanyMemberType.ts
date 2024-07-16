import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ServiceHasCompanyMemberType';

export default createModel(
  MODEL_NAME.SERVICE_HAS_COMPANY_MEMBER_TYPE,
  (ServiceHasCompanyMemberTypeModel) => {
    // relations
    const serviceHasCompanyMemberType = manyToMany({
      attributeA: ATTRIBUTE.serviceId,
      attributeB: ATTRIBUTE.companyMemberTypeId,
      modelNameA: MODEL_NAME.SERVICE,
      modelNameB: MODEL_NAME.COMPANY_MEMBER_TYPE,
    });

    // defined Model
    process.nextTick(() => {
      ServiceHasCompanyMemberTypeModel.int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
        .int(ATTRIBUTE.companyMemberTypeId, {
          map: COLUMN.companyMemberTypeId,
        })

        .mixin(serviceHasCompanyMemberType);
    });
  },
);
