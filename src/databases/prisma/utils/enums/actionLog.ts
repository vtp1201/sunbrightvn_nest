import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  userId = 'userId',
  description = 'description',
  type = 'type',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  userId = 'user_id',
  description = 'description',
  type = 'type',
  createdTime = COLUMN_DEFAULT.createdTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  user = 'user',
}

export default {
  ATTRIBUTE,
  RELATION,
};
