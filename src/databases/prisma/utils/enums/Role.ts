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
  emailTemplateHasReceivers = RELATION_DEFAULT.emailTemplateHasReceivers,
  notificationTemplates = RELATION_DEFAULT.notificationTemplates,
  processStepHasRoles = RELATION_DEFAULT.processStepHasRoles,
  parent = RELATION_DEFAULT.parent,
  children = RELATION_DEFAULT.children,
  limits = RELATION_DEFAULT.limits,
  permissions = RELATION_DEFAULT.permissions,
  users = RELATION_DEFAULT.users,
}

export enum INDEX {
  parentId = `@@index([${ATTRIBUTE.parentId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
