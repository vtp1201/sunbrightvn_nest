import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  campaigns = RELATION_DEFAULT.campaigns,
}

export default {
  ATTRIBUTE,
  RELATION,
};
