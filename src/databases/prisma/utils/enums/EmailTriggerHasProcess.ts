import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  emailTriggerId = 'emailTriggerId',
  processId = 'processId',
  emailTemplateId = 'emailTemplateId',
  isRemind = 'isRemind',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
}

export enum COLUMN {
  emailTriggerId = 'email_trigger_id',
  processId = 'process_id',
  emailTemplateId = 'email_template_id',
  isRemind = 'is_remind',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
}

export enum RELATION {
  emailTemplate = RELATION_DEFAULT.emailTemplate,
  emailTrigger = RELATION_DEFAULT.emailTrigger,
  process = RELATION_DEFAULT.process,
}

export enum INDEX {
  emailTemplateId = `@@index([${ATTRIBUTE.emailTemplateId}], map: "fk_ema_email_template_id_ema_id_jsfc")`,
  emailTriggerId = `@@index([${ATTRIBUTE.emailTriggerId}])`,
  processId = `@@index([${ATTRIBUTE.processId}], map: "fk_ema_process_id_pro_id_5hgb")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
