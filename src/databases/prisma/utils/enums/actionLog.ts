import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  userId = 'userId',
  description = 'description',
  type = 'type',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  isDeleted = 'isDeleted',
}

export enum COLUMN {
  id = 'id',
  userId = 'user_id',
  description = 'description',
  type = 'type',
  createdTime = COLUMN_DEFAULT.isDeleted,
  isDeleted = 'is_deleted',
}

export enum RELATION {
  user = 'user',
}

export default {
  ATTRIBUTE,
  RELATION,
};
