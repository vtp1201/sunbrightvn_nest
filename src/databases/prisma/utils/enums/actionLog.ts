export enum ATTRIBUTE {
  id = 'id',
  userId = 'userId',
  description = 'description',
  type = 'type',
  createdTime = 'createdTime',
  isDeleted = 'isDeleted',
}

export enum COLUMN {
  id = 'id',
  userId = 'user_id',
  description = 'description',
  type = 'type',
  createdTime = 'created_time',
  isDeleted = 'is_deleted',
}

export enum RELATION {
  user = 'user',
}

export default {
  ATTRIBUTE,
  RELATION,
};
