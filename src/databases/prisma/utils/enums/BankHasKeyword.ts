import { TABLE_NAME } from '../constants';
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

const tableName = TABLE_NAME.BANK_HAS_KEYWORD;
export enum INDEX_NAME {
  bankId = `"${tableName}_${COLUMN.bankId}_fkey"`,
}
export enum INDEX {
  bankId = `@@index([${ATTRIBUTE.bankId}], map: ${INDEX_NAME.bankId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
