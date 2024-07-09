import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ServiceHasCompanySuffix';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.SERVICE_HAS_COMPANY_SUFFIX,
  (ServiceHasCompanySuffixModel) => {
    // relations
    const serviceHasCompanySuffix = manyToMany({
      attributeA: ATTRIBUTE.serviceId,
      attributeB: ATTRIBUTE.companySuffixId,
      modelNameA: MODEL_NAME.SERVICE,
      modelNameB: MODEL_NAME.COMPANY_SUFFIX,
    });

    // defined Model
    process.nextTick(() => {
      ServiceHasCompanySuffixModel.int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
        .int(ATTRIBUTE.companySuffixId, {
          map: COLUMN.companySuffixId,
        })

        .mixin(serviceHasCompanySuffix);
    });
  },
);
