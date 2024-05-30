import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  bankId = 'bankId',
  keyword = 'keyword',
}

export enum COLUMN {
  id = 'id',
  bankId = 'bank_id',
  keyword = 'keyword',
}

export enum RELATION {
  bank = RELATION_DEFAULT.bank,
}

export default {
  ATTRIBUTE,
  RELATION,
};
