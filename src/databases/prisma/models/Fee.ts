import { createModel } from 'schemix';

import { MODEL_NAME, RAW_NUMBER, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Fee';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.FEE, (FeeModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
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
    FeeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
        optional: true,
      })
      .int(ATTRIBUTE.feeTypeId, {
        map: COLUMN.feeTypeId,
      })
      .float(ATTRIBUTE.value, {
        map: COLUMN.value,
        optional: true,
        raw: RAW_NUMBER.FLOAT,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.feeTypeId)
      // .raw(INDEX.serviceId)

      // table name
      .map(TABLE_NAME.FEE);
  });
});
