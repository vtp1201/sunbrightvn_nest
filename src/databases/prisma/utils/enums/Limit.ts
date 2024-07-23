import { TABLE_NAME } from '../constants';
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
  roles = RELATION_DEFAULT.roles,
}

const tableName = TABLE_NAME.LIMIT;
export enum INDEX_NAME {
  limitTypeId = `"${tableName}_${COLUMN.limitTypeId}_fkey"`,
  permissionGroupId = `"${tableName}_${COLUMN.permissionGroupId}_fkey"`,
  permissionId = `"${tableName}_${COLUMN.permissionId}_fkey"`,
}

export enum INDEX {
  limitTypeId = `@@index([${ATTRIBUTE.limitTypeId}], map: ${INDEX_NAME.limitTypeId})`,
  permissionGroupId = `@@index([${ATTRIBUTE.permissionGroupId}], map: ${INDEX_NAME.permissionGroupId})`,
  permissionId = `@@index([${ATTRIBUTE.permissionId}], map: ${INDEX_NAME.permissionId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
  INDEX,
};
