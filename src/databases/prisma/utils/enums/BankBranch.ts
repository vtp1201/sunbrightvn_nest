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

export default {
  ATTRIBUTE,
  RELATION,
};
