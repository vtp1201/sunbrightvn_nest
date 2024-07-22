import { TABLE_NAME } from '@utilities/constants';

import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  campaignId = 'campaignId',
  voucherTypeId = 'voucherTypeId',
  totalQuantity = 'totalQuantity',
  remainingQuantity = 'remainingQuantity',
  percent = 'percent',
  config = 'config',
}

export enum COLUMN {
  campaignId = 'campaign_id',
  voucherTypeId = 'voucher_type_id',
  totalQuantity = 'total_quantity',
  remainingQuantity = 'remaining_quantity',
  percent = 'percent',
  config = 'config',
}

export enum RELATION {
  campaign = RELATION_DEFAULT.campaign,
  voucherType = RELATION_DEFAULT.voucherType,
}

const tableName = TABLE_NAME.CAMPAIGN_HAS_VOUCHER_TYPE;
export enum INDEX_NAME {
  campaignId = `"${tableName}_${COLUMN.campaignId}_fkey"`,
  voucherTypeId = `"${tableName}_${COLUMN.voucherTypeId}_fkey"`,
}

export enum INDEX {
  campaignId = `@@index([${ATTRIBUTE.campaignId}], map: ${INDEX_NAME.campaignId})`,
  voucherTypeId = `@@index([${ATTRIBUTE.voucherTypeId}], map: ${INDEX_NAME.voucherTypeId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
