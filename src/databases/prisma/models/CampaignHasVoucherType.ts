import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CampaignHasVoucherType';

export default createModel(
  MODEL_NAME.CAMPAIGN_HAS_VOUCHER_TYPE,
  (CampaignHasVoucherTypeModel) => {
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

      // table name
      .map(TABLE_NAME.CAMPAIGN_HAS_VOUCHER_TYPE);
  },
);
