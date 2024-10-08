import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  taskId = 'taskId',
  ranking = 'ranking',
  rankingPartnerTypeId = 'rankingPartnerTypeId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  taskId = 'task_id',
  ranking = 'ranking',
  rankingPartnerTypeId = 'ranking_partner_type_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  files = RELATION_DEFAULT.files,
  rankingPartnerType = RELATION_DEFAULT.rankingPartnerType,
  task = RELATION_DEFAULT.task,
}

const tableName = TABLE_NAME.RANKING_PARTNER;
export enum INDEX_NAME {
  rankingPartnerTypeId = `"${tableName}_${COLUMN.rankingPartnerTypeId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
}

export enum INDEX {
  rankingPartnerTypeId = `@@index([${ATTRIBUTE.rankingPartnerTypeId}], map: ${INDEX_NAME.rankingPartnerTypeId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
