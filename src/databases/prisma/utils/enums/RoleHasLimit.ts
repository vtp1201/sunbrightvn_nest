import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  roleId = 'roleId',
  limitId = 'limitId',
}

export enum COLUMN {
  roleId = 'role_id',
  limitId = 'limit_id',
}

export enum RELATION {
  role = RELATION_DEFAULT.role,
  limit = RELATION_DEFAULT.limit,
}

export default {
  ATTRIBUTE,
  RELATION,
};
