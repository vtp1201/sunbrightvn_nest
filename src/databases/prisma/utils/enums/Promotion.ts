import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  promotionCode = 'promotionCode',
  percent = 'percent',
  amount = 'amount',
  isUsed = 'isUsed',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  promotionCode = 'promotion_code',
  percent = 'percent',
  amount = 'amount',
  isUsed = 'is_used',
  createdTime = COLUMN_DEFAULT.createdTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {}

export default {
  ATTRIBUTE,
  RELATION,
};
