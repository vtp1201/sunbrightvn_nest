import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  address = 'address',
  bankId = 'bankId',
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  address = 'address',
  bankId = 'bank_id',
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  bank = RELATION_DEFAULT.bank,
  bankingProcesses = RELATION_DEFAULT.bankingProcesses,
}

const tableName = TABLE_NAME.BANK_BRANCH;
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
