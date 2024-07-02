import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  description = 'description',
  isPrefix = 'isPrefix',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  description = 'description',
  isPrefix = 'is_prefix',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  companies = RELATION_DEFAULT.companies,
  countries = RELATION_DEFAULT.countries,
  customers = RELATION_DEFAULT.customers,
  entityTypes = RELATION_DEFAULT.entityTypes,
  historyCompanies = RELATION_DEFAULT.historyCompanies,
  proposedNames = RELATION_DEFAULT.proposedNames,
  services = RELATION_DEFAULT.services,
}

export default {
  ATTRIBUTE,
  RELATION,
};
