import { createModel } from 'schemix';

import { campaign, voucherType } from '.';
import { oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CampaignHasVoucherType';

export default createModel(MODEL_NAME.CAMPAIGN_HAS_VOUCHER_TYPE, (CampaignHasVoucherTypeModel) => {
  // defined Relations
  const campaignRelation = oneToOne({
    attribute: ATTRIBUTE.campaignId,
    model: campaign,
    relation: RELATION.campaign,
  });
  const voucherTypeRelation = oneToOne({
    attribute: ATTRIBUTE.voucherTypeId,
    model: voucherType,
    relation: RELATION.voucherType,
  });

  // defined Model
  process.nextTick(() => {
    CampaignHasVoucherTypeModel.int(ATTRIBUTE.campaignId, {
      map: COLUMN.campaignId,
    })
      .int(ATTRIBUTE.voucherTypeId, {
        map: COLUMN.voucherTypeId,
      })
      .int(ATTRIBUTE.totalQuantity, {
        map: COLUMN.totalQuantity,
        optional: true,
      })
      .int(ATTRIBUTE.remainingQuantity, {
        map: COLUMN.remainingQuantity,
        optional: true,
      })
      .int(ATTRIBUTE.percent, {
        map: COLUMN.percent,
        optional: true,
      })
      .json(ATTRIBUTE.config, {
        map: COLUMN.config,
        optional: true,
      })
      .id({
        fields: [ATTRIBUTE.campaignId, ATTRIBUTE.voucherTypeId],
      })

      // relations
      .mixin(campaignRelation)
      .mixin(voucherTypeRelation)

      // table name
      .map(TABLE_NAME.CAMPAIGN_HAS_VOUCHER_TYPE);
  });
});
