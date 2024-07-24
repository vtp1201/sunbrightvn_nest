import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  bankingProcessId = 'bankingProcessId',
  fromTime = 'fromTime',
  toTime = 'toTime',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  bankingProcessId = 'banking_process_id',
  fromTime = 'from_time',
  toTime = 'to_time',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  bankingProcess = RELATION_DEFAULT.bankingProcess,
}

const tableName = TABLE_NAME.PROPOSED_TIME;
export enum INDEX_NAME {
  bankingProcessId = `"${tableName}_${COLUMN.bankingProcessId}_fkey"`,
}

export enum INDEX {
  bankingProcessId = `@@index([${ATTRIBUTE.bankingProcessId}], map: ${INDEX_NAME.bankingProcessId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
