import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  value = 'value',
  left = 'left',
  right = 'right',
  parentId = 'parentId',
  description = 'description',
  status = 'status',
  colorCode = 'colorCode',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  value = 'value',
  left = 'left',
  right = 'right',
  parentId = 'parent_id',
  description = 'description',
  status = 'status',
  colorCode = 'color_code',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  parentRole = RELATION_DEFAULT.parentRole,
}

export enum INDEX {
  parentId = `@@index([${ATTRIBUTE.parentId}], map: "fk_role_role1_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
