import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CustomerHasBank';

export default createModel(
  MODEL_NAME.CUSTOMER_HAS_BANK,
  (CustomerHasBankModel) => {
    CustomerHasBankModel.int(ATTRIBUTE.customerId, {
      map: COLUMN.customerId,
    })
      .int(ATTRIBUTE.bankId, {
        map: COLUMN.bankId,
      })
      .id({
        fields: [ATTRIBUTE.customerId, ATTRIBUTE.bankId],
      })

      // table name
      .map(TABLE_NAME.CUSTOMER_HAS_BANK);
  },
);
