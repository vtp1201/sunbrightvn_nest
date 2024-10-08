import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  fileTypeGroupId = 'fileTypeGroupId',
  parentId = 'parentId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  fileTypeGroupId = 'file_type_group_id',
  parentId = 'parent_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  files = RELATION_DEFAULT.files,
  parent = RELATION_DEFAULT.parent,
  children = RELATION_DEFAULT.children,
}

const tableName = TABLE_NAME.FILE_TYPE;
export enum INDEX_NAME {
  parentId = `"${tableName}_${COLUMN.parentId}_fkey"`,
}

export enum INDEX {
  parentId = `@@index([${ATTRIBUTE.parentId}], map: ${INDEX_NAME.parentId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
