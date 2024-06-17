import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  serviceChangeOfficerId = 'serviceChangeOfficerId',
  fileTemplateId = 'fileTemplateId',
}

export enum COLUMN {
  serviceChangeOfficerId = 'service_change_officer_id',
  fileTemplateId = 'file_template_id',
}

export enum RELATION {
  serviceChangeOfficer = RELATION_DEFAULT.serviceChangeOfficer,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
}

export default {
  ATTRIBUTE,
  RELATION,
};
