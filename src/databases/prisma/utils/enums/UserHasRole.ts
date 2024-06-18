import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  userId = 'userId',
  roleId = 'roleId',
}

export enum COLUMN {
  userId = 'user_id',
  roleId = 'role_id',
}

export enum RELATION {
  user = RELATION_DEFAULT.user,
  role = RELATION_DEFAULT.role,
}

export default {
  ATTRIBUTE,
  RELATION,
};
