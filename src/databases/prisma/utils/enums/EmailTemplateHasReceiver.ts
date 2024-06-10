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
  teamGroup = RELATION_DEFAULT.teamGroup,
  emails = RELATION_DEFAULT.emails,
  role = RELATION_DEFAULT.role,
  user = RELATION_DEFAULT.user,
}

export enum INDEX {
  emailTemplateId = '@@index([email_template_id], map: "fk_email_template_id_idx")',
  groupId = '@@index([group_id], map: "fk_group_id_idx")',
  roleId = '@@index([role_id], map: "fk_role_id_idx")',
  userId = '@@index([user_id], map: "fk_user_id_idx")',
}

export default {
  ATTRIBUTE,
  RELATION,
};
