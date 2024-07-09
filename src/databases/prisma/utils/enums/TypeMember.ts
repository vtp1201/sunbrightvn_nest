import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  companyMembers = RELATION_DEFAULT.companyMembers,
  fileTemplateHasCompanyMemberTypes = RELATION_DEFAULT.fileTemplateHasCompanyMemberTypes,
  historyCompanyMembers = RELATION_DEFAULT.historyCompanyMembers,
}

export default {
  ATTRIBUTE,
  RELATION,
};
