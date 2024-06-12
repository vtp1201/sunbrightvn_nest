import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  fileTemplateId = 'fileTemplateId',
  countryId = 'countryId',
  isFillMoreInformation = 'isFillMoreInformation',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  fileTemplateId = 'file_template_id',
  countryId = 'country_id',
  isFillMoreInformation = 'is_fill_more_information',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  country = RELATION_DEFAULT.country,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
}

export enum INDEX {}

export default {
  ATTRIBUTE,
  RELATION,
};
