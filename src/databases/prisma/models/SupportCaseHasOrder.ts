import { createModel } from 'schemix';

import { manyToMany } from '../mixins';
import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/SupportCaseHasOrder';

export default createModel(MODEL_NAME.SUPPORT_CASE_HAS_ORDER, (SupportCaseHasOrderModel) => {
  // relations
  const supportCaseHasOrder = manyToMany({
    attributeA: ATTRIBUTE.supportCaseId,
    attributeB: ATTRIBUTE.orderId,
    modelNameA: MODEL_NAME.SUPPORT_CASE,
    modelNameB: MODEL_NAME.ORDER,
  });

  // defined Model
  process.nextTick(() => {
    SupportCaseHasOrderModel.int(ATTRIBUTE.supportCaseId, {
      map: COLUMN.supportCaseId,
    })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
      })

      .mixin(supportCaseHasOrder);
  });
});
