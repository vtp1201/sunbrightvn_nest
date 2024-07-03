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

export enum INDEX {}

export default {
  ATTRIBUTE,
  RELATION,
};
