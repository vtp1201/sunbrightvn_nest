import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  customerId = 'customerId',
  bankId = 'bankId',
}

export enum COLUMN {
  customerId = 'customer_id',
  bankId = 'bank_id',
}

export enum RELATION {
  customer = RELATION_DEFAULT.customer,
  bank = RELATION_DEFAULT.bank,
}

export default {
  ATTRIBUTE,
  RELATION,
};
