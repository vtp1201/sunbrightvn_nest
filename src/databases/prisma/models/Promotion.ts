import { createModel } from 'schemix';

import { createdTime, deleted } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/Promotion';

export default createModel(MODEL_NAME.PROMOTION, (PromotionModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initDeleted = deleted(
    {
      attribute: ATTRIBUTE.deletedTime,
      column: COLUMN.deletedTime,
    },
    {
      attribute: ATTRIBUTE.isDeleted,
      column: COLUMN.isDeleted,
    },
  );

  // defined Model
  process.nextTick(() => {
    PromotionModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.promotionCode, {
        map: COLUMN.promotionCode,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.percent, {
        map: COLUMN.percent,
        default: 0,
      })
      .int(ATTRIBUTE.amount, {
        map: COLUMN.amount,
        default: 0,
      })
      .boolean(ATTRIBUTE.isUsed, {
        map: COLUMN.isUsed,
        default: false,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.PROMOTION);
  });
});
