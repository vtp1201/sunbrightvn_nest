import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  processStepId = 'processStepId',
  fileTemplateId = 'fileTemplateId',
  order = 'order',
  isBegin = 'isBegin',
}

export enum COLUMN {
  processStepId = 'process_step_id',
  fileTemplateId = 'file_template_id',
  order = 'order',
  isBegin = 'is_begin',
}

export enum RELATION {
  processStep = RELATION_DEFAULT.processStep,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
}

export default {
  ATTRIBUTE,
  RELATION,
};
