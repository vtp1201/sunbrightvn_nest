import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  guid = 'guid',
  country = 'country',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  guid = 'guid',
  country = 'country',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  companies = RELATION_DEFAULT.companies,
  countryHasEntityTypes = RELATION_DEFAULT.countryHasEntityTypes,
  countryHasServices = RELATION_DEFAULT.countryHasServices,
  customers = RELATION_DEFAULT.customers,
  entityTypeHasCompanySuffixes = RELATION_DEFAULT.entityTypeHasCompanySuffixes,
  historyCompanies = RELATION_DEFAULT.historyCompanies,
  renamedPackages = RELATION_DEFAULT.renamedPackages,
  tasks = RELATION_DEFAULT.tasks,
}

export default {
  ATTRIBUTE,
  RELATION,
};
