import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  description = 'description',
  campaignTypeId = 'campaignTypeId',
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  description = 'description',
  campaignTypeId = 'campaign_type_id',
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  campaignType = RELATION_DEFAULT.campaignType,
  campaignHasVoucherTypes = RELATION_DEFAULT.campaignHasVoucherTypes,
  customers = RELATION_DEFAULT.customers,
}

export default {
  ATTRIBUTE,
  RELATION,
};
