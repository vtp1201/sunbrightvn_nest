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
  countryHasCompanySuffixes = RELATION_DEFAULT.countryHasCompanySuffixes,
  customers = RELATION_DEFAULT.customers,
  entityTypeHasCompanySuffixes = RELATION_DEFAULT.entityTypeHasCompanySuffixes,
  historyCompanies = RELATION_DEFAULT.historyCompanies,
  proposedNames = RELATION_DEFAULT.proposedNames,
  serviceHasCompanySuffixes = RELATION_DEFAULT.serviceHasCompanySuffixes,
}

export default {
  ATTRIBUTE,
  RELATION,
};
