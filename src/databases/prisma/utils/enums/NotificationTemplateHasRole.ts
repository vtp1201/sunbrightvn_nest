import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  roleId = 'roleId',
  notificationTemplateId = 'notificationTemplateId',
}

export enum COLUMN {
  roleId = 'role_id',
  notificationTemplateId = 'notification_template_id',
}

export enum RELATION {
  role = RELATION_DEFAULT.role,
  notificationTemplate = RELATION_DEFAULT.notificationTemplate,
}

export default {
  ATTRIBUTE,
  RELATION,
};
