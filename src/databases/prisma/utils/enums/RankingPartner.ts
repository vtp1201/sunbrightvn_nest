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

export enum INDEX {
  rankingPartnerTypeId = `@@index([${ATTRIBUTE.rankingPartnerTypeId}], map: "fk_ran_ranking_partner_type_id_ran_id_3u9b")`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: "fk_ran_task_id_tas_id_badp")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
