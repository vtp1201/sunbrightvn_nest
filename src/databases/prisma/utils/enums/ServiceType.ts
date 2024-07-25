import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  description = 'description',
  left = 'left',
  right = 'right',
  parentId = 'parentId',
  websiteId = 'websiteId',
  isActive = 'isActive',
  processStepTypes = 'processStepTypes',
  isRequired = 'isRequired',
  isOnly = 'isOnly',
  order = 'order',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  description = 'description',
  left = 'left',
  right = 'right',
  parentId = 'parent_id',
  websiteId = 'website_id',
  isActive = 'is_active',
  processStepTypes = 'process_step_types',
  isRequired = 'is_required',
  isOnly = 'is_only',
  order = 'order',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  actionProcessSteps = RELATION_DEFAULT.actionProcessSteps,
  packages = RELATION_DEFAULT.packages,
  services = RELATION_DEFAULT.services,
  website = RELATION_DEFAULT.website,
  parent = RELATION_DEFAULT.parent,
  children = RELATION_DEFAULT.children,
  serviceTypeHasDepartments = RELATION_DEFAULT.serviceTypeHasDepartments,
}

const tableName = TABLE_NAME.SERVICE_TYPE;
export enum INDEX_NAME {
  websiteId = `"${tableName}_${COLUMN.websiteId}_fkey"`,
  parentId = `"${tableName}_${COLUMN.parentId}_fkey"`,
}

export enum INDEX {
  websiteId = `@@index([${ATTRIBUTE.websiteId}], map: ${INDEX_NAME.websiteId})`,
  parentId = `@@index([${ATTRIBUTE.parentId}], map: ${INDEX_NAME.parentId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
