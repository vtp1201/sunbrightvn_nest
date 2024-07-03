import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  permissionGroupId = 'permissionGroupId',
  value = 'value',
  name = 'name',
  description = 'description',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  permissionGroupId = 'permission_group_id',
  value = 'value',
  name = 'name',
  description = 'description',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  limits = RELATION_DEFAULT.limits,
  permissionGroup = RELATION_DEFAULT.permissionGroup,
  roles = RELATION_DEFAULT.roles,
}

export enum INDEX {
  permissionGroupId = `@@index([${ATTRIBUTE.permissionGroupId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
