import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  orderId = 'orderId',
  bankId = 'bankId',
}

export enum COLUMN {
  orderId = 'order_id',
  bankId = 'bank_id',
}

export enum RELATION {
  bank = RELATION_DEFAULT.bank,
  order = RELATION_DEFAULT.order,
}

export default {
  ATTRIBUTE,
  RELATION,
};
