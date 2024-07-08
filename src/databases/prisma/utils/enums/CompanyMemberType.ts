import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  description = 'description',
  parentId = 'parentId',
  isRequired = 'isRequired',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  description = 'description',
  parentId = 'parent_id',
  isRequired = 'is_required',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  parent = RELATION_DEFAULT.parent,
  children = RELATION_DEFAULT.children,
  companyPositions = RELATION_DEFAULT.companyPositions,
  fileTemplateHasCompanyMemberTypes = RELATION_DEFAULT.fileTemplateHasCompanyMemberTypes,
  serviceChangeOfficers = RELATION_DEFAULT.serviceChangeOfficers,
  services = RELATION_DEFAULT.services,
}

export default {
  ATTRIBUTE,
  RELATION,
};
