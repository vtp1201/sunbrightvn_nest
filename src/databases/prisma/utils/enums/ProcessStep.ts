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
  actionProcessStepNext = 'action_process_step_next_process_step_idToprocess_step',
  actionProcessStep = 'action_process_step_process_step_idToprocess_step',
  emailTemplate = 'email_template',
  emailTrigger = 'email_trigger',
  note = RELATION_DEFAULT.note,
  notificationTemplate = 'notification_template',
  process = 'process',
  processStepType = 'process_step_type',
  parentProcessStep = 'process_stepToprocess_step',
  otherProcessStep = 'process_stepToprocess_step',
  processStepHasFileTemplate = 'process_step_has_file_template',
  processStepHasRoleProcessStep = 'process_step_has_role_process_step_idToprocess_step',
  processStepHasRoleRole = 'process_step_has_role_role_idToprocess_step',
}

export enum INDEX {
  processStepTypeId = `@@index([${ATTRIBUTE.processStepTypeId}], map: "fk_pro_process_step_type_id_pro_id_e8sy")`,
  parentId = `@@index([${ATTRIBUTE.parentId}], map: "parent_id_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
