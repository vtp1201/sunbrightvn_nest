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
  bankHasFileTemplates = RELATION_DEFAULT.bankHasFileTemplates,
  bankHasKeywords = RELATION_DEFAULT.bankHasKeywords,
  bankingProcesses = RELATION_DEFAULT.bankingProcesses,
  customerHasBanks = RELATION_DEFAULT.customerHasBanks,
  orderHasBanks = RELATION_DEFAULT.orderHasBanks,
}

export default {
  ATTRIBUTE,
  RELATION,
};
