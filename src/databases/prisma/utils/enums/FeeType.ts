import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  value = 'value',
  name = 'name',
  cycleBegin = 'cycleBegin',
  cycleTime = 'cycleTime',
  description = 'description',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  value = 'value',
  name = 'name',
  cycleBegin = 'cycle_begin',
  cycleTime = 'cycle_time',
  description = 'description',
  isDeleted = 'is_deleted',
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  fees = RELATION_DEFAULT.fees,
}

export default {
  ATTRIBUTE,
  RELATION,
};
