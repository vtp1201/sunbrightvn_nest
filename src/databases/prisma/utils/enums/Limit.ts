import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  limitTypeId = 'limitTypeId',
  permissionGroupId = 'permissionGroupId',
  permissionId = 'permissionId',
  model = 'model',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  limitTypeId = 'limit_type_id',
  permissionGroupId = 'permission_group_id',
  permissionId = 'permission_id',
  model = 'model',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  limitType = RELATION_DEFAULT.limitType,
  permissionGroup = RELATION_DEFAULT.permissionGroup,
  permission = RELATION_DEFAULT.permission,
  limitValues = RELATION_DEFAULT.limitValues,
  roleHasLimits = RELATION_DEFAULT.roleHasLimits,
}

export enum INDEX {
  limitTypeId = `@@index([${ATTRIBUTE.limitTypeId}], map: "fk_limit_type_id_idx")`,
  permissionGroupId = `@@index([${ATTRIBUTE.permissionGroupId}], map: "fk_permission_group_id_idx")`,
  permissionId = `@@index([${ATTRIBUTE.permissionId}], map: "fk_permission_id_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
  INDEX,
};
