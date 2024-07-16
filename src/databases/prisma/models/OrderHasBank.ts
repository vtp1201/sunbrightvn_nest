import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/OrderHasBank';

export default createModel(MODEL_NAME.ORDER_HAS_BANK, (OrderHasBankModel) => {
  // relations
  const orderHasBank = manyToMany({
    attributeA: ATTRIBUTE.orderId,
    attributeB: ATTRIBUTE.bankId,
    modelNameA: MODEL_NAME.ORDER,
    modelNameB: MODEL_NAME.BANK,
  });

  // defined Model
  process.nextTick(() => {
    OrderHasBankModel.int(ATTRIBUTE.bankId, {
      map: COLUMN.bankId,
    })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
      })

      .mixin(orderHasBank);
  });
});
