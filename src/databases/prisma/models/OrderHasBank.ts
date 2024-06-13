import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/OrderHasBank';

export default createModel(MODEL_NAME.ORDER_HAS_BANK, (OrderHasBankModel) => {
  // defined Model
  process.nextTick(() => {
    OrderHasBankModel.int(ATTRIBUTE.bankId, {
      map: COLUMN.bankId,
    })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
      })

      // indexes
      .id({ fields: [ATTRIBUTE.bankId, ATTRIBUTE.orderId] })

      // table name
      .map(TABLE_NAME.ORDER_HAS_BANK);
  });
});
