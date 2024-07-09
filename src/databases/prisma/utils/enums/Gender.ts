import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  prefix = 'prefix',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  prefix = 'prefix',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  companyMembers = RELATION_DEFAULT.companyMembers,
  customers = RELATION_DEFAULT.customers,
  historyCompanyMembers = RELATION_DEFAULT.historyCompanyMembers,
  persons = RELATION_DEFAULT.persons,
}

export default {
  ATTRIBUTE,
  RELATION,
};
