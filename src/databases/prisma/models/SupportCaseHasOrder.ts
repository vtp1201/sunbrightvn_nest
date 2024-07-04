import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/SupportCaseHasOrder';
// import { updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.SUPPORT_CASE_HAS_ORDER,
  (SupportCaseHasOrderModel) => {
    // const initUpdatedTime = updatedTime({
    //   attribute: ATTRIBUTE.updatedTime,
    //   column: COLUMN.updatedTime,
    // });

    // defined Model
    process.nextTick(() => {
      SupportCaseHasOrderModel.int(ATTRIBUTE.supportCaseId, {
        map: COLUMN.supportCaseId,
      })
        .int(ATTRIBUTE.orderId, {
          map: COLUMN.orderId,
        })

        // dateTime marks
        // .mixin(initUpdatedTime)

        // ids
        .id({
          fields: [ATTRIBUTE.supportCaseId, ATTRIBUTE.orderId],
        })

        // table name
        .map(TABLE_NAME.SUPPORT_CASE_HAS_ORDER);
    });
  },
);
