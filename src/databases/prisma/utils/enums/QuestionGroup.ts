import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  left = 'left',
  right = 'right',
  fileTemplateId = 'fileTemplateId',
  order = 'order',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  left = 'left',
  right = 'right',
  fileTemplateId = 'file_template_id',
  order = 'order',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  files = RELATION_DEFAULT.files,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
  questions = RELATION_DEFAULT.questions,
}

export default {
  ATTRIBUTE,
  RELATION,
};
