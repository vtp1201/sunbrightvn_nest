import { TABLE_NAME } from '../constants';
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

const tableName = TABLE_NAME.EMAIL_TRIGGER_HAS_PROCESS;
export enum INDEX_NAME {
  emailTemplateId = `"${tableName}_${COLUMN.emailTemplateId}_fkey"`,
  emailTriggerId = `"${tableName}_${COLUMN.emailTriggerId}_fkey"`,
  processId = `"${tableName}_${COLUMN.processId}_fkey"`,
}

export enum INDEX {
  emailTemplateId = `@@index([${ATTRIBUTE.emailTemplateId}], map: ${INDEX_NAME.emailTemplateId})`,
  emailTriggerId = `@@index([${ATTRIBUTE.emailTriggerId}], map: ${INDEX_NAME.emailTriggerId})`,
  processId = `@@index([${ATTRIBUTE.processId}], map: ${INDEX_NAME.processId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
