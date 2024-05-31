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

export default {
  ATTRIBUTE,
  RELATION,
};
