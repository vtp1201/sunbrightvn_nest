import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  countryHasEntityTypeId = 'countryHasEntityTypeId',
  fileTemplateId = 'fileTemplateId',
}

export enum COLUMN {
  countryHasEntityTypeId = 'country_has_entity_type_id',
  fileTemplateId = 'file_template_id',
}

export enum RELATION {
  countryHasEntityType = RELATION_DEFAULT.countryHasEntityType,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
}

export default {
  ATTRIBUTE,
  RELATION,
};
