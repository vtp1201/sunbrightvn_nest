import { TABLE_NAME } from '../constants/modelName';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

const tableName = TABLE_NAME.ACTION_LOG;
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
  user = RELATION_DEFAULT.user,
}

export enum INDEX_NAME {
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
}
export enum INDEX {
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
