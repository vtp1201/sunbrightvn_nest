import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  babyMax = 'babyMax',
  value = 'value',
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  babyMax = 'baby_max',
  value = 'value',
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  services = RELATION_DEFAULT.services,
}

export default {
  ATTRIBUTE,
  RELATION,
};
