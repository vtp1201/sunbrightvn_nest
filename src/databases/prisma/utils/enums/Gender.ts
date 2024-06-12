import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  prefix = 'prefix',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  prefix = 'prefix',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {}

export default {
  ATTRIBUTE,
  RELATION,
};
