import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  leaderUserId = 'leaderUserId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  leaderUserId = 'leader_user_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  emailTemplateHasReceivers = RELATION_DEFAULT.emailTemplateHasReceivers,
  users = RELATION_DEFAULT.users,
  leaderUser = RELATION_DEFAULT.leaderUser,
}

const tableName = TABLE_NAME.TEAM_GROUP;
export enum INDEX_NAME {
  leaderUserId = `"${tableName}_${COLUMN.leaderUserId}_fkey"`,
}

export enum INDEX {
  leaderUserId = `@@index([${ATTRIBUTE.leaderUserId}], map: ${INDEX_NAME.leaderUserId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
