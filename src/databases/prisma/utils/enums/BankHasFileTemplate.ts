import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  bankId = 'bankId',
  fileTemplateId = 'fileTemplateId',
}

export enum COLUMN {
  bankId = 'bank_id',
  fileTemplateId = 'file_template_id',
}

export enum RELATION {
  bank = RELATION_DEFAULT.bank,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
}

export default {
  ATTRIBUTE,
  RELATION,
};
