import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CustomerHasBank';

export default createModel(MODEL_NAME.CUSTOMER_HAS_BANK, (CustomerHasBankModel) => {
  // relations
  const customerHasBank = manyToMany({
    attributeA: ATTRIBUTE.customerId,
    attributeB: ATTRIBUTE.bankId,
    modelNameA: MODEL_NAME.CUSTOMER,
    modelNameB: MODEL_NAME.BANK,
  });
  process.nextTick(() => {
    CustomerHasBankModel.int(ATTRIBUTE.customerId, {
      map: COLUMN.customerId,
    })
      .int(ATTRIBUTE.bankId, {
        map: COLUMN.bankId,
      })
      .mixin(customerHasBank);
  });
});
