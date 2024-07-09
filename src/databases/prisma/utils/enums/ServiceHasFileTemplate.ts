import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  serviceId = 'serviceId',
  fileTemplateId = 'fileTemplateId',
  typeConfigs = 'typeConfigs',
}

export enum COLUMN {
  serviceId = 'service_id',
  fileTemplateId = 'file_template_id',
  typeConfigs = 'type_configs',
}

export enum RELATION {
  service = RELATION_DEFAULT.service,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
}

export default {
  ATTRIBUTE,
  RELATION,
};
