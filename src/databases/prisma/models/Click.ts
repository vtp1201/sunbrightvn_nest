import { createModel } from 'schemix';

import { voucherType } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Click';

export default createModel(MODEL_NAME.CLICK, (ClickModel) => {
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
  // defined Relations
  const voucherTypeRelation = oneToOne({
    attribute: ATTRIBUTE.voucherTypeId,
    model: voucherType,
    relation: RELATION.voucherType,
    map: INDEX_NAME.voucherTypeId,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    ClickModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.googleClientId, {
        map: COLUMN.googleClientId,
        raw: RAW_STRING.LENGTH_225,
        optional: true,
      })
      .string(ATTRIBUTE.ipAddress, {
        map: COLUMN.ipAddress,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .int(ATTRIBUTE.voucherTypeId, {
        map: COLUMN.voucherTypeId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(voucherTypeRelation)

      // indexes
      .raw(INDEX.voucherTypeId)

      // table name
      .map(TABLE_NAME.CLICK);
  });
});
