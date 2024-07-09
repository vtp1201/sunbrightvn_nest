import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/VoucherType';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { campaignHasVoucherType, click, voucher } from '.';

export default createModel(MODEL_NAME.VOUCHER_TYPE, (VoucherTypeModel) => {
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

  // relations defined
  const campaignHasVoucherTypesRelation = oneToMany({
    model: campaignHasVoucherType,
    relation: RELATION.campaignHasVoucherTypes,
  });
  const clicksRelation = oneToMany({
    model: click,
    relation: RELATION.clicks,
  });
  const vouchersRelation = oneToMany({
    model: voucher,
    relation: RELATION.vouchers,
  });

  // defined Model
  process.nextTick(() => {
    VoucherTypeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_225,
      })
      .json(ATTRIBUTE.config, {
        map: COLUMN.config,
        optional: true,
      })
      .int(ATTRIBUTE.percent, {
        map: COLUMN.percent,
        optional: true,
      })
      .string(ATTRIBUTE.uuid, {
        map: COLUMN.uuid,
        raw: RAW_STRING.LENGTH_36,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(campaignHasVoucherTypesRelation)
      .mixin(clicksRelation)
      .mixin(vouchersRelation)

      // table name
      .map(TABLE_NAME.VOUCHER_TYPE);
  });
});
