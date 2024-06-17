import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  roleId = 'roleId',
  permissionId = 'permissionId',
}

export enum COLUMN {
  roleId = 'role_id',
  permissionId = 'permission_id',
}

export enum RELATION {
  role = RELATION_DEFAULT.role,
  permission = RELATION_DEFAULT.permission,
}

export default {
  ATTRIBUTE,
  RELATION,
};
