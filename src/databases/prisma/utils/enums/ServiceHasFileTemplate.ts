import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  serviceId = 'serviceId',
  fileTemplateId = 'fileTemplateId',
}

export enum COLUMN {
  serviceId = 'service_id',
  fileTemplateId = 'file_template_id',
}

export enum RELATION {
  service = RELATION_DEFAULT.service,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
}

export default {
  ATTRIBUTE,
  RELATION,
};
