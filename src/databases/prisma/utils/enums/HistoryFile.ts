import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  historyLogCDCId = 'historyLogCdcId',
  fileId = 'fileId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  historyLogCDCId = 'history_log_cdc_id',
  fileId = 'file_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  file = RELATION_DEFAULT.file,
  historyLogCDC = RELATION_DEFAULT.historyLogCDC,
}

const tableName = TABLE_NAME.HISTORY_FILE;
export enum INDEX_NAME {
  fileId = `"${tableName}_${COLUMN.fileId}_fkey"`,
  historyLogCDCId = `"${tableName}_${COLUMN.historyLogCDCId}_fkey"`,
}

export enum INDEX {
  fileId = `@@index([${ATTRIBUTE.fileId}], map: ${INDEX_NAME.fileId})`,
  historyLogCDCId = `@@index([${ATTRIBUTE.historyLogCDCId}], map: ${INDEX_NAME.historyLogCDCId})`,
}

export enum INDEX {}

export default {
  ATTRIBUTE,
  RELATION,
};
