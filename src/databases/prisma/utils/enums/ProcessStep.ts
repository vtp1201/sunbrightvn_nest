import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  value = 'value',
  name = 'name',
  description = 'description',
  left = 'left',
  right = 'right',
  parentId = 'parentId',
  descriptionDisplay = 'descriptionDisplay',
  isGeneratedFile = 'isGeneratedFile',
  isSendLinkSigned = 'isSendLinkSigned',
  order = 'order',
  processStepTypeId = 'processStepTypeId',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  value = 'value',
  name = 'name',
  description = 'description',
  left = 'left',
  right = 'right',
  parentId = 'parent_id',
  descriptionDisplay = 'description_display',
  isGeneratedFile = 'is_generated_file',
  isSendLinkSigned = 'is_send_link_signed',
  order = 'order',
  processStepTypeId = 'process_step_type_id',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  nextActionProcessSteps = RELATION_DEFAULT.nextActionProcessSteps,
  actionProcessSteps = RELATION_DEFAULT.actionProcessSteps,
  emailTemplates = RELATION_DEFAULT.emailTemplates,
  emailTriggers = RELATION_DEFAULT.emailTriggers,
  notes = RELATION_DEFAULT.notes,
  notificationTemplates = RELATION_DEFAULT.notificationTemplates,
  processes = RELATION_DEFAULT.processes,
  processStepType = RELATION_DEFAULT.processStepType,
  parent = RELATION_DEFAULT.parent,
  children = RELATION_DEFAULT.children,
  processStepHasFileTemplates = RELATION_DEFAULT.processStepHasFileTemplates,
  processStepHasRoles = RELATION_DEFAULT.processStepHasRoles,
}

export enum INDEX {
  processStepTypeId = `@@index([${ATTRIBUTE.processStepTypeId}])`,
  parentId = `@@index([${ATTRIBUTE.parentId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
