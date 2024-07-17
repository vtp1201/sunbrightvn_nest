import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  image = 'image',
  countryId = 'countryId',
  initialDeposit = 'initialDeposit',
  isVirtual = 'isVirtual',
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  image = 'image',
  countryId = 'country_id',
  initialDeposit = 'initial_deposit',
  isVirtual = 'is_virtual',
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  actionProcessSteps = RELATION_DEFAULT.actionProcessSteps,
  agents = RELATION_DEFAULT.agents,
  country = RELATION_DEFAULT.country,
  bankBranches = RELATION_DEFAULT.bankBranches,
  bankHasCountries = RELATION_DEFAULT.bankHasCountries,
  fileTemplates = RELATION_DEFAULT.fileTemplates,
  bankHasKeywords = RELATION_DEFAULT.bankHasKeywords,
  bankingProcesses = RELATION_DEFAULT.bankingProcesses,
  customers = RELATION_DEFAULT.customers,
  orders = RELATION_DEFAULT.orders,
}

const tableName = TABLE_NAME.BANK;
export enum INDEX_NAME {
  countryId = `"${tableName}_${COLUMN.countryId}_fkey"`,
}
export enum INDEX {
  countryId = `@@index([${ATTRIBUTE.countryId}], map: ${INDEX_NAME.countryId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
