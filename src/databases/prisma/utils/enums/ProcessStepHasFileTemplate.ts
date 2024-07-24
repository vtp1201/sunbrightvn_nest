import { TABLE_NAME } from '../constants';
import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  processStepId = 'processStepId',
  fileTemplateId = 'fileTemplateId',
  order = 'order',
  isBegin = 'isBegin',
  questionId = 'questionId',
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

const tableName = TABLE_NAME.PROCESS_STEP_HAS_FILE_TEMPLATE;
export enum INDEX_NAME {
  processStepId = `"${tableName}_${COLUMN.processStepId}_fkey"`,
  fileTemplateId = `"${tableName}_${COLUMN.fileTemplateId}_fkey"`,
}

export enum INDEX {
  processStepId = `@@index([${ATTRIBUTE.processStepId}], map: ${INDEX_NAME.processStepId})`,
  fileTemplateId = `@@index([${ATTRIBUTE.fileTemplateId}], map: ${INDEX_NAME.fileTemplateId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
