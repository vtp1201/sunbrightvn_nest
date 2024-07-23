import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  emailTemplateId = 'emailTemplateId',
  email = 'email',
  userId = 'userId',
  roleId = 'roleId',
  groupId = 'groupId',
  isMainReceiver = 'isMainReceiver',
  isCcReceiver = 'isCcReceiver',
  isBccReceiver = 'isBccReceiver',
  isExcluded = 'isExcluded',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  emailTemplateId = 'email_template_id',
  email = 'email',
  userId = 'user_id',
  roleId = 'role_id',
  groupId = 'group_id',
  isMainReceiver = 'is_main_receiver',
  isCcReceiver = 'is_cc_receiver',
  isBccReceiver = 'is_bcc_receiver',
  isExcluded = 'is_excluded',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  emailTemplate = RELATION_DEFAULT.emailTemplate,
  group = RELATION_DEFAULT.group,
  emails = RELATION_DEFAULT.emails,
  role = RELATION_DEFAULT.role,
  user = RELATION_DEFAULT.user,
}

const tableName = TABLE_NAME.EMAIL_TEMPLATE_HAS_RECEIVER;
export enum INDEX_NAME {
  emailTemplateId = `"${tableName}_${COLUMN.emailTemplateId}_fkey"`,
  groupId = `"${tableName}_${COLUMN.groupId}_fkey"`,
  roleId = `"${tableName}_${COLUMN.roleId}_fkey"`,
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
}

export enum INDEX {
  emailTemplateId = `@@index([${ATTRIBUTE.emailTemplateId}], map: ${INDEX_NAME.emailTemplateId})`,
  groupId = `@@index([${ATTRIBUTE.groupId}], map: ${INDEX_NAME.groupId})`,
  roleId = `@@index([${ATTRIBUTE.roleId}], map: ${INDEX_NAME.roleId})`,
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
